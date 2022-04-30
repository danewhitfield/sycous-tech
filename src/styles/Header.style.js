import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.mainCard};
  height: 80px;
  margin-top: -20px;
  margin-bottom: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.138);
`;
