import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: fixed;
  height: max-content;
  width: 100%;
  top: 0;
  margin-top: 30px;
  background-color: #fff;
  height: 100vh;
  overflow: scroll;

  .h4 {
    margin: 15px 0;
    font-weight: 700;
  }

  .card-sidebar {
    p {
      margin: 0;
    }
  }

  @media (min-width: 1200px) {
    position: sticky;
    width: 200px;
    top: 100px;
    height: fit-content;
  }
`
