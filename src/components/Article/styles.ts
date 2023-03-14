import styled from "styled-components";

export const ArticleContainer = styled.article`
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme.colors.base.post};

  border-radius: 0.625rem;
  border: 2px solid ${(props) => props.theme.colors.base.post};
  padding: 2rem;

  transition: all 0.2s ease-in;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.base.text};
  }

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.base.label};

    transform: scale(1.03);
  }
`;

export const ArticleTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    color: ${(props) => props.theme.colors.base.title};
    font-weight: 700;
    line-height: 160%;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.base.span};
    line-height: 160%;
  }
`;

export const ArticleBody = styled.div`
  > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 160%;
  }
`;
