import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-left: 70px;

	@media (max-width: 431px) {
		margin-left: 20px;
	}
`;

export const Title = styled.h1`
  ...
`;

export const Select = styled.select`
	margin-top: 10px;
	display: flex;
	width: 10%;
	padding: 10px;
	border-radius: 5px;
	border: 2px solid #959595;
	background-color: ${(props) =>
		props.theme.selectBackground}; // Установка цвета фона
	color: ${(props) => props.theme.selectColor}; // Установка цвета текста
`;

export const Option = styled.option`
	border-radius: 0px;
	font-size: 15px;
`;

export const Button = styled.button`
	padding: 12px 35px;
	border: none;
	border-radius: 5px;
	background-color: #595959;
	color: white;
	cursor: pointer;
	margin-top: 20px;

	&:hover {
		background-color: #707070;
	}

	&:active {
		position: relative;
		top: 4px;
	}
`;

export const SnackbarWrapper = styled.div`
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	background-color: #333;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	opacity: ${({ show }) => (show ? '1' : '0')};
	transition: opacity 0.3s ease-in-out;
`;
