import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

import { getSearch } from '../../services/wordpress'
import * as S from './styles'

export default function Search({ setResults, className }) {
  const [terms, setTerms] = useState(null)

  async function SearchTerm() {
    const search = await getSearch(terms)
    setResults(search)
  }

  return (
    <S.LayoutWrapper className={className}>
      <div className="flex p-2 border-b-2 rounded-3xl items-center">
        <input
          onChange={(e) => setTerms(e.target.value)}
          type="search"
          name=""
          id=""
          placeholder="Digite um termo de pesquisa"
        />
        <CiSearch
          onClick={SearchTerm}
          className={`cursor-pointer`}
          color="#000"
        />
      </div>
    </S.LayoutWrapper>
  )
}
