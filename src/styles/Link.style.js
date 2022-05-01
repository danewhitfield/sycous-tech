import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.mainText};
	transition: all 0.3s ease;

	h4 {
		transition: all 0.3s ease;
	}

	h4:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	li p:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	img {
		width: 200px;
		height: 46px;
	}
`;
