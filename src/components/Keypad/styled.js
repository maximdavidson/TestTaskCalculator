import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 900px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 40px;
	padding-top: 30px;
	padding-left: 100px;

	@media (max-width: 431px) {
		padding-left: 10px;
		gap: 20px;
	}
`;

export const Button = styled.button`
	cursor: pointer;
	width: 75%;
	background-color: #5e5d5d;
	color: #f1f1f1;
	border: none;
	padding: 25px;
	font-size: 20px;
	border-radius: 10px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #6b6b6b;
	}

	@media (max-width: 431px) {
		width: 80%;
		padding: 20px;
	}
`;

export const SelectedButton = styled(Button)`
	background-color: #2b2b2b;
`;
