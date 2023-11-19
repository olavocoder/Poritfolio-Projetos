import styled from 'styled-components'

import { devices } from '../../styles/utils/devices'

export const SlideWrapper = styled.div`
  position: relative;
  button {
    &[data-action='stop'],
    &[data-action='start'] {
      display: none;
    }
  }
  .unit-page {
    font-weight: 400;
  }
  &.slideBanner-wrapper {
    .slideBanner_nav {
      .slideBanner_navItem {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        transition: 0.3s all;
        margin: 0 8px;
        &.tns-nav-active {
          width: 42px;
          border-radius: 8px;
        }
      }
    }
    @media ${devices.tabletL} {
      display: none;
    }
  }
  .${(props) => props.children[1].props.className} {
    display: flex;
    justify-content: center;
    height: 4px;
    margin-top: 32px;
    position: relative;

    span {
      height: inherit;
      margin: 0 15px;
      width: 44px;
      background-color: #d9d9d9;
    }

    .tns-nav-active {
      background-color: ${({ iconColor }) => iconColor};
    }

    /* @media ${devices.tabletL} {
      ${({ isNav }) => (isNav == false ? 'display: none;' : 'display: flex;')}
    } */
  }

  .slideBanner_btn {
    display: none;
    margin: 24px auto 0;
    position: relative;
    border-radius: 30px;

    &.active {
      display: block;
      @media ${devices.tabletL} {
        display: none;
      }
    }
  }
`

export const SlideItems = styled.div`
  .${(props) => props.children.props.className} {
    color: white;
  }
  font-weight: 400;
  margin-bottom: 1rem;

  @media ${devices.tabletL} {
    padding: 0 25px;
  }

  @media (min-width: 1300px) {
    padding: 0 66px;
  }
`

export const ArrowsArea = styled.div`
  display: flex;
  .tns-outer {
    width: inherit;
  }
  &.${({ className }) => className} {
    width: 100%;
    .${({ principal }) => principal} {
      width: 100%;
    }
    .${({ principal }) => principal}_left {
      transform: rotate(0deg);
    }

    .${({ principal }) => principal}_right {
      transform: rotate(180deg);
    }

    .${({ principal }) => principal}_left,
      .${({ principal }) => principal}_right {
      margin: auto 0;
    }

    @media ${devices.tabletL} {
      z-index: 1;
    }
  }
`
export const Nav = styled.div``

export const ButtonBlog = styled.div``
