import styled from 'styled-components'

import { devices } from '../../styles/utils/devices'
import { Container } from '../Container'

export const Wrapper = styled.header`
  z-index: 2;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #000000de;
  backdrop-filter: blur(15px);
  color: #fff;
  box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
  img {
    object-fit: contain;
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
    @media (${devices.laptopS}) {
      padding: 10px 0;
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
  display: flex;
  align-items: center;
  ul {
    margin-left: 25px;
    cursor: pointer;
  }
`
