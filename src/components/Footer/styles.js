import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  position: relative;
  color: #fff;
  padding: 30px 0;
  text-align: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
  .footer-wrapper{
    position: relative;
  }
`
export const SocialLogoArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #fff;
  .social_icons {
    margin-left: 20px;
  }
`
