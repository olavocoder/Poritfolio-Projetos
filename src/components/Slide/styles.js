import styled from 'styled-components'

import { devices } from '../../styles/utils/devices'
import Button from '../Button'
import { Container } from '../Container'

export const LayoutWrapper = styled.div`
  button {
    &[data-action='stop'],
    &[data-action='start'] {
      display: none;
    }
  }
  padding: 40px 0;
  ${({ back }) => `background-color: ${back};`}
  ${({ back }) => `color: ${back == 'white' ? '#0e0e0e' : 'white'};`}
  @media ${devices.tabletL} {
    height: 50vh;
    padding: 0;
  }
`

export const LayoutBanner = styled(Container)`
  display: block;
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
      line-height: 1.8;
    }
  }

  .layout-img {
    img {
      object-fit: cover;
      border-radius: 10px;
      transition: all 0.3s;
    }
  }

  .layout-img {
    &.slideImgundefined {
      width: auto;
    }
  }

  @media ${devices.tabletL} {
    display: flex;
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
  display: inline-flex;
  margin: 0 10px 40px;
`

export const SlideTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  a {
    color: white;
    text-decoration: none;
  }
  .tns-outer {
    width: 80%;
  }

  .slideWrapper {
    width: 300px;
    position: relative;
    display: flex;
  }
  .slide-cardWrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
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

export const SkillsWrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  img {
    padding-right: 10px;
    padding-top: 7px;
    object-fit: contain;
    transition: all 0.3s;
    &:hover {
      transform: translate(0, -7px);
    }
  }
  .tns-outer {
    width: auto;
  }
  @media ${devices.tabletL} {
    margin: 30px 0 0;
    display: flex;
    justify-content: center;
  }
`

export const SlideImg = styled.div`
  ${({ back, width, height }) => `
    background-image: url(${back});
    width: ${width};
    height: ${height};
    background-size:100%;
  `}
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  transition: all 0.3s;
  background-color: rgba(14, 14, 14, 0.69);
  box-shadow: inset -1px 0px 30px 7px rgb(15 15 15 / 82%);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(48, 48, 48, 0.71);
  &:hover {
    border: 1px solid rgb(92 92 92 / 71%);
  }
`
