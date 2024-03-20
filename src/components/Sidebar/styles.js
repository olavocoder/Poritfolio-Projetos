import styled, { css } from 'styled-components'

import { devices } from '../../styles/utils/devices'
import { Container } from '../Container'

export const Wrapper = styled.nav`
  position: sticky;
  width: 200px;
  height: max-content;
  top: 150px;
  margin-top: 30px;
  .h4 {
    margin: 15px 0;
  }
  .sidebar-categories {
    display: flex;
    justify-content: space-between;
  }
`
export const CardSidebar = styled.div`
  margin-bottom: 30px;
  box-shadow: 0px 8px 24px 0px rgba(140, 149, 159, 0.2);
  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
  a {
    display: block;
    margin: auto;
    width: fit-content;
  }
`
