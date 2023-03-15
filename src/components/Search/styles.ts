import styled from "styled-components";

export const SearchContainer = styled.div`
  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.base.border};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    color: ${(props) => props.theme.colors.base.text};
    background: ${(props) => props.theme.colors.base.input};

    margin-top: 0.75rem;

    transition: all 0.2s ease-in;

    &:focus {
      border-color: ${(props) => props.theme.colors.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.base.label};
    }
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.base.subtitle};

    line-height: 160%;
    font-weight: 700;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.base.span};
  }
`;
