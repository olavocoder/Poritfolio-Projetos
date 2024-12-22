import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  overflow: scroll;
  button {
    &.active {
      font-weight: 700;
    }
  }

  span {
    margin: 0 10px;
  }
`
