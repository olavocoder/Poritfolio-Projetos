import styled from 'styled-components'

import { devices } from '../../styles/utils/devices'
import Button from '../Button'
import { Container } from '../Container'

export const LayoutWrapper = styled.div`
  position: relative;
  padding: 40px 0;
  border-radius: 30px;
  button {
    &[data-action='stop'],
    &[data-action='start'] {
      display: none;
    }
  }
  
  .tns-controls{
    display: none;
  }

  ${({ back }) => `background-color: ${back};`}
  ${({ back }) => `color: ${back == 'white' ? '#0e0e0e' : 'white'};`}

  .tns-nav {
    position: absolute;
    bottom: 0;
    right:0;
    left:0;
    width: fit-content;
    margin: auto;
    z-index: 1;

    button{
      background-color: #9f9f9f9f;
      width: 10px;
      height: 10px;
      border-radius: 30px;
      margin-right: 5px;
      &.tns-nav-active{
        background: #fff;
        width: 20px;
      }
    }
  }

  @media ${devices.tabletL} {
    height: 40vh;
    padding: 0;
    background-color: transparent;
  }
`

export const LayoutBanner = styled(Container)`
  display: block;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  text-align: center;

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
    text-decoration: none;
  }

  .tns-outer {
    width: 100%;
  }

  .slideWrapper {
    width: 300px;
    height: 50vh;
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
    background: transparent;
    &-wrapper {
      background-color: #fff;
      display: flex;
      gap: 30px;
      border-radius: 30px;
      align-items: center;
    
    }
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
