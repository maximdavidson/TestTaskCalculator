import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #4b4b4b;
`;

export const Title = styled.h3`
	margin-left: 30px;
	color: #f1f1f1;
`;

export const Navigation = styled.nav`
	margin-right: 30px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	padding-right: 20px;
	color: #f1f1f1;

	&:last-child {
		padding-right: 0;
	}

	&:hover,
	&:focus {
		text-decoration: underline;
	}
`;
