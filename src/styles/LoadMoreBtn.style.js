import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.sycousAccent};
  color: ${({ theme }) => theme.colors.mainBg};
  border: none;
  border-radius: 6px;
  padding: 10px;
  margin: 20px 0;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.161);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainBg};
    box-shadow: inset 5px 5px 8px rgba(0, 0, 0, 0.161);
  }
`;
