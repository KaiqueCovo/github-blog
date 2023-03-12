import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 296px;

  background-image: url("../../assets/cover.svg");
  background-repeat: no-repeat;
  background-size: cover;

  svg {
    position: relative;
    top: 4rem;
  }
`;
