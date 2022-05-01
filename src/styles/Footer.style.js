import styled from 'styled-components';

export const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	bottom: -20px;
	left: 0;
	width: 100vw;
	background-color: ${({ theme }) => theme.colors.sycousAccent};

	section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 20px;
		height: 5vh;
		width: 400px;
		color: ${({ theme }) => theme.colors.mainBg};
		font-style: italic;
		font-weight: bold;
	}

	a {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	span a {
		font-size: 28px;
		margin-right: -100px;
		cursor: pointer;
		color: #fff;
		transition: all 0.3s ease;
	}

	span a:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
