import styled from "styled-components";

export const StyledDropdown = styled.select`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mainText};

  &:active,
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;
