import styled from 'styled-components';

export const StyledList = styled.ul`
	list-style: none;
	width: 100%;
	max-width: calc(300px * 3);
	height: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	align-items: center;
	gap: 30px;

	li {
		position: relative;
		width: 300px;
		height: 100px;
		background-color: ${({ theme }) => theme.colors.mainCard};
		border-radius: 10px;
		padding: 20px;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.135);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	li:hover {
		/* transform: translateY(-2px) scale(1.01); */
		background-color: ${({ theme }) => theme.colors.sycousAccent};
		color: ${({ theme }) => theme.colors.mainBg};
		font-size: 14px;
	}

	li:hover > p:nth-child(1)::before {
		content: 'CONSUMER';
		position: absolute;
		top: 42px;
		right: -25px;
		font-weight: bold;
		text-decoration: underline;
		transform: translate(-50%, -50%);
		color: ${({ theme }) => theme.colors.mainBg};
		transform: rotate(90deg);
	}

	p {
		font-weight: bold;
	}

	@media screen and (max-width: 1100px) {
		display: flex;
		flex-wrap: wrap;
	}
`;
