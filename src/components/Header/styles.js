import styled, { css } from 'styled-components'

import { devices } from '../../styles/utils/devices'
import { Container } from '../Container'

export const Wrapper = styled.header`
  box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
  img {
    object-fit: contain;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position fixed;
    width: 100%;
  `}
`
export const ContainerHeader = styled(Container)`
  .menu-area {
    display: flex;
    justify-content: space-between;
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
