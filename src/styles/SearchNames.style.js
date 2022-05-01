import styled from 'styled-components';

export const StyledSearchNames = styled.input`
	border: none;
	background-color: transparent;
	border-bottom: 1px solid #333;
	margin-bottom: -20px;
	opacity: 0.4;
	transition: all 0.3s ease;

	&:focus,
	&:active {
		outline: none;
		transform: scale(1.01);
		opacity: 1;
	}
`;
