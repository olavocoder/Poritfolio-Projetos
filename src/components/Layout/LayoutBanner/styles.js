import styled from 'styled-components'

import { devices } from '../../../styles/utils/devices'
import { Container } from '../../Container'

export const LayoutWrapper = styled.div`
  ${({
    back
  }) => `background:linear-gradient(rgba(0, 0, 0, 0.345), rgba(0, 0, 0, 0.267)) ,url('${back}') 
;`}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${devices.tabletL} {
    height: 100vh;
  }
`

export const LayoutBanner = styled(Container)`
  color: white;
  display: flex;
  flex-direction: column;
  height: inherit;
  align-items: center;

  .layout-area {
    height: 590px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;
    h2 {
      font-weight: 400;
      font-size: 37px;
    }
    p {
      font-size: 28px;
    }
    h2,
    p {
      font-weight: 400;
    }
  }

  .layout-img {
    display: none;
  }

  @media ${devices.tabletL} {
    .layout {
      width: 50%;
    }
    .layout-area {
      width: 400px;
    }
    justify-content: space-between;
    ${({ direction }) =>
      `flex-direction: ${direction == 'left' ? 'row' : 'row-reverse'};`}
    .layout-img {
      text-align: center;
      display: block;
      img {
        cursor: pointer;
        object-fit: cover;
      }
    }
  }
`
//ativar o opacity quando o blog estiver pronto
export const ButtonLayout = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p {
    margin: 0;
  }
`

export const SlideTextWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  margin-top: 200px;
  height: max-content;
  .slideWrapper {
    width: 300px;
    position: relative;
    display: flex;
  }
  .slideItem {
    font-size: 22px;
    margin: 0;
    text-align: center;
  }
  .slideArrow {
    z-index: 999;
    cursor: pointer;
    &:first-child {
      transform: rotate(180deg);
    }
  }
`
