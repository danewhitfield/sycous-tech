import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  bottom: -20px;
  left: 0;
  text-align: center;
  padding: 10px;
  height: 5vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.mainCard};
  font-style: italic;
  font-weight: bold;

  a {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;
