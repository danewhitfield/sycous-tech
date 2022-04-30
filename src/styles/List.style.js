import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  li {
    width: 300px;
    background-color: ${({ theme }) => theme.colors.mainCard};
    border-radius: 10px;
    padding: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.135);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  li:hover {
    transform: translateY(-4px) scale(1.01);
    background-color: ${({ theme }) => theme.colors.sycousAccent};
    color: ${({ theme }) => theme.colors.mainBg};
  }

  p {
    font-weight: bold;
  }
`;
