import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Button, SelectedButton,Wrapper } from './styled';

function Keypad({ onButtonClick }) {
	const [selectedButton, setSelectedButton] = useState(null);
	const buttons = [
		'C',
		'7',
		'8',
		'9',
		'*',
		'-',
		'4',
		'5',
		'6',
		'/',
		'+',
		'1',
		'2',
		'3',
		'=',
		'.',
		'+/-',
		'0',
		'%',
		'CE',
		'(',
		')',
	];

	const handleClick = (button) => {
		setSelectedButton(button);
		onButtonClick(button);
	};

	const toggleSign = () => {
		onButtonClick('+/-');
	};

	const handleBracketClick = (bracket) => {
		onButtonClick(bracket);
	};

	return (
		<Wrapper>
			{buttons.map((button) =>
				button === selectedButton ? (
					<SelectedButton
						key={button}
						onClick={button === '+/-' ? toggleSign : () => handleClick(button)}
					>
						{button}
					</SelectedButton>
				) : button === '(' || button === ')' ? (
					<Button key={button} onClick={() => handleBracketClick(button)}>
						{button}
					</Button>
				) : (
					<Button
						key={button}
						onClick={button === '+/-' ? toggleSign : () => handleClick(button)}
					>
						{button}
					</Button>
				),
			)}
		</Wrapper>
	);
}

Keypad.propTypes = {
	onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
