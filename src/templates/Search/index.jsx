import { useState, useEffect } from 'react'

import Card from '../../components/Card'
import { Container } from '../../components/Container'
import Search from '../../components/Search'
import Base from '../Base'
import * as S from './styles'

export default function SearchTemplate({ header, post }) {
  const [results, setResults] = useState(null)
  useEffect(() => {
    if (window.localStorage.getItem('dataSearch')) {
      const dataSearch = JSON.parse(window.localStorage.getItem('dataSearch'))
      setResults(dataSearch)
    }
  }, [header])

  return (
    <Base data={post} header={header} slideClass={['heroSlide']}>
      <S.Wrapper>
        <Container>
          <div>
            <h1>Busque um termo importante</h1>
            <Search setResults={setResults} />
            {results && <h4>Numeros de resultados: {results.length}</h4>}
          </div>
          <div className="mb-14 mt-5">
            {results &&
              results?.map((data, index) => (
                <Card data={data} direction="horizontal" key={index} />
              ))}
          </div>
        </Container>
      </S.Wrapper>
    </Base>
  )
}
