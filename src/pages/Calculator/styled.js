import styled from 'styled-components';

export const CalculatorContainer = styled.div`
	display: flex;

	@media (max-width: 431px) {
		flex-direction: column;
	}
`;

export const CalculatorWrapper = styled.div`
	flex: 3;
	margin-right: 20px;

	@media (max-width: 431px) {
		margin-right: 0;
	}
`;

export const HistoryWrapper = styled.div`
	margin-top: 20px;
	align-items: center;
	flex: 1;

	@media (max-width: 431px) {
		order: 1;
		margin-top: 40px;
	}
`;

export const TogglePositionWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;
