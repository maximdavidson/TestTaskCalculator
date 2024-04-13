import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button, SelectedButton } from './styled';

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
	];

	const handleClick = (button) => {
		setSelectedButton(button);
		onButtonClick(button);
	};

	const toggleSign = () => {
		onButtonClick('+/-');
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
