import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;

  max-width: 54rem;
  margin: 0 auto;
  top: -5rem;

  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;

  background-color: ${(props) => props.theme.colors.base.profile};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`;

export const ProfileName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h3 {
    font-size: ${(props) => props.theme.fontSizes["2xl"]};
    color: ${(props) => props.theme.colors.base.title};
    font-weight: 700;
  }

  a {
    display: flex;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: 700;

    text-transform: uppercase;
    text-decoration: none;

    &::after {
      content: "";
      width: 0%;
      height: 0.0625rem;
      position: absolute;
      left: 0;
      bottom: 0.5rem;

      background-color: ${(props) => props.theme.colors.blue};

      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.2s;
    }
  }
`;

export const ProfileBiography = styled.div`
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    line-height: 160%;
  }
`;

export const ProfileInformations = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  svg {
    color: ${(props) => props.theme.colors.base.label};
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
