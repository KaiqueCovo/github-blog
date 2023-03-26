import styled from 'styled-components'

export const ArticleHeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.base.profile};
  
  border-radius: 10px;
  padding: 2rem;

  position: relative;
  top: -5rem;

  h1 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    margin: 1.25rem 0 .5rem;
  }
`

export const ArticleHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;
    
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 700;
    color: ${(props) => props.theme.colors.blue};

    text-transform: uppercase;
  }
`

export const ArticleHeaderInformations = styled.div`
  display: flex;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme.colors.base.label};
  }

  span {
    display: flex;
    align-items: center;
    gap: .5rem;

    color: ${(props) => props.theme.colors.base.span};
  }
`