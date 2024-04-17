import React, { Component } from 'react';

import { HeaderContainer, Navigation, StyledLink,Title } from './styled';

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<Title>Calculator App</Title>
				<Navigation>
					<StyledLink to="/home">Home FC</StyledLink>
					<StyledLink to="/settings">Settings CC</StyledLink>
				</Navigation>
			</HeaderContainer>
		);
	}
}

export default Header;
