import React, { Component } from 'react';
import { HeaderContainer, Title, Navigation, StyledLink } from './styled';

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<Title>Calculator App</Title>
				<Navigation>
					<StyledLink to="/home">Home</StyledLink>
					<StyledLink to="/settings">Settings</StyledLink>
				</Navigation>
			</HeaderContainer>
		);
	}
}

export default Header;
