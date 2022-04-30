import styled from "styled-components";

export const StyledLocationPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  background-color: ${({ theme }) => theme.colors.mainCard};
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.135);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.01);
  }
`;
