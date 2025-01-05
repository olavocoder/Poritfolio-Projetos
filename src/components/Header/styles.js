import styled from 'styled-components'
import { Container } from '../Container'

export const Wrapper = styled.header`
  z-index: 2;
  padding: 10px 0;
  background-color: #0a0a0a30;
  backdrop-filter: blur(15px);
  color: #000;
  box-shadow: inset -4px -3px 1px 0px rgba(140, 149, 159, 0.3);
  border-radius: 0 0 30px 30px;
  img {
    height: 50px;
  }

  position: fixed;
  width: 100%;
`
export const ContainerHeader = styled(Container)`
  .menu-area {
    display: flex;
    justify-content: space-between;
    .menu-list {
      display: flex;
      gap: 50px;
    }
  }

  .search-area {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    input {
      width: 400px;
    }
  }
`
export const MenuList = styled.nav`
  a {
    margin-left: 25px;
    cursor: pointer;
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
  }
`
