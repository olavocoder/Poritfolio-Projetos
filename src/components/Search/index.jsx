import { useEffect, useState } from 'react'
import { TbMoodCry } from 'react-icons/tb'
import { CiSearch } from 'react-icons/ci'

import { getSearch } from '../../services/wordpress'
import * as S from './styles'

export default function Search({ className }) {
  const [terms, setTerms] = useState(null)
  const [results, setResults] = useState(null)

  useEffect(() => {
    async function CallApiSearch() {
      const search = await getSearch(terms)
      setResults(search)
    }

    setTimeout(() => CallApiSearch(), 500)
  }, [terms])

  return (
    <S.LayoutWrapper className={className}>
      <div>
        <input
          className="py-1"
          onChange={(e) => setTerms(e.target.value)}
          type="search"
          name=""
          id=""
          placeholder="Digite um termo de pesquisa"
        />
        <CiSearch className="inline-block" />
      </div>
      {results && (
        <div>
          <h3 className="font-semibold">Resultados de pesquisa:</h3>
          {results.length > 0 ? (
            results.map((item, index) => (
              <a
                key={index}
                className={`block py-1 ${
                  results.length - 1 == index ? '' : 'border-b'
                }`}
                href={`/blog/${item?.slug?.current}`}
              >
                {item?.title}
              </a>
            ))
          ) : (
            <p>
              Buscando... Nada encontrado no momento.{' '}
              <TbMoodCry className="inline-block" />
            </p>
          )}
        </div>
      )}
    </S.LayoutWrapper>
  )
}
