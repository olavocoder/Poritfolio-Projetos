import styled, { css } from 'styled-components'

import { devices } from '../../styles/utils/devices'
import { Container } from '../Container'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position fixed;
    width: 100%;
  `}
`
export const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media (${devices.laptopS}) {
    padding: 10px 0;
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
