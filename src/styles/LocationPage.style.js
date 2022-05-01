import styled from 'styled-components';

export const StyledLocationPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 26px;
	background-color: ${({ theme }) => theme.colors.mainCard};
	border-radius: 10px;
	padding: 20px;
	width: 500px;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.135);
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.sycousAccent};
		color: ${({ theme }) => theme.colors.mainBg};
	}

	div span {
		transition: all 0.6s ease-in-out;
	}

	/* OVERLAY */
	/* &:hover > div span {
    width: 100vw;
    height: 1080px;
    position: absolute;
    background-color: #333;
    opacity: 0.4;
    z-index: -1;
  } */

	div {
		position: relative;
		top: -70px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		width: 100px;
		height: 100px;
		background-color: ${({ theme }) => theme.colors.mainCard};
		border: none;
		border-radius: 50%;
	}

	&:hover > div {
		visibility: visible;
		border: 4px solid ${({ theme }) => theme.colors.sycousAccent};
	}

	section h3 {
		text-align: center;
		text-transform: uppercase;
		font-size: 30px;
		margin-bottom: 30px;
		margin-top: -30px;
		position: relative;
	}

	section h3::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 20px);
		width: 0;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.sycousAccent};
		transition: all 0.4s ease-in-out;
	}

	&:hover > section h3::after {
		width: 250px;
		background-color: ${({ theme }) => theme.colors.mainBg};
	}

	@media screen and (max-width: 1100px) {
		height: 100px;
		width: 200px;
		font-size: 16px;

		&:hover {
			transform: none;
			color: inherit;
			background-color: ${({ theme }) => theme.colors.mainCard};
			width: 300px;
		}

		&:hover > div {
			border: none;
		}

		section h3 {
			font-size: 20px;
			margin-bottom: 10px;
		}

		&:hover > section h3::after {
			width: 0;
			background-color: none;
		}

		div {
			background-color: transparent;
			top: -10px;
			left: -70px;
			font-size: 20px;
			color: ${({ theme }) => theme.colors.mainCard};
			transition: all 0.3s ease;
		}

		&:hover > div {
			position: relative;
			color: ${({ theme }) => theme.colors.sycousAccent};
			background-color: transparent;
		}
	}
`;
