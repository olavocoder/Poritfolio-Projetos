import styled, { css } from 'styled-components'

import { devices } from '../../styles/utils/devices'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;

    @media ${devices.tablet} {
      padding-left: 40px;
      padding-right: 40px;
    }

    @media ${devices.laptopS} {
      padding-left: 0;
      padding-right: 0;

      ${({ noPadded, largePadded }) =>
        !noPadded &&
        !largePadded &&
        `
        padding-left: calc(${theme.grid.gutter} / 2);
        padding-right: calc(${theme.grid.gutter} / 2);
      `}

      ${({ noPadded, largePadded }) =>
        !noPadded &&
        largePadded &&
        `
        padding-left: calc(${theme.grid.largeGutter} / 2);
        padding-right: calc(${theme.grid.largeGutter} / 2);
      `}
    }
  `}
`
