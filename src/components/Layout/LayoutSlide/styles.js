import styled from 'styled-components'

import { devices } from '../../../styles/utils/devices'
import Button from '../../Button'
import { Container } from '../../Container'

export const LayoutWrapper = styled.div`
  padding: 40px 0;
  ${({ back }) => `background-color: ${back};`}
  ${({ back }) => `color: ${back == 'white' ? 'black' : 'white'};`}
  @media ${devices.tabletL} {
    height: 100vh;
    padding: 0;
  }
`

export const LayoutBanner = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  text-align: center;
  .tns-nav {
    display: none;
  }

  .layout {
    width: 50%;
  }

  .layout-area {
    width: 100%;
    h2 {
      font-weight: 400;
      font-size: 37px;
      text-align: center;
    }
    h2,
    p {
      margin-bottom: 30px;
    }
  }

  .layout-img {
    img {
      object-fit: cover;
      border-radius: 30px;
    }
  }

  @media ${devices.tabletL} {
    .tns-outer {
      width: 50%;
    }
    .layout-area {
      width: 400px;
    }

    ${({ direction }) =>
      `flex-direction: ${direction == 'left' ? 'row' : 'row-reverse'};`}
  }
`

export const ButtonLayout = styled(Button)`
  display: block;
  margin: auto;
`

export const SlideTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  margin: 40px 0;

  .tns-outer {
    width: 50%;
  }

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

  @media ${devices.tabletL} {
    margin: 40px 0 0;
    margin-top: 150px;
  }
`

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  img {
    padding-right: 10px;
    object-fit: contain;
  }
`
