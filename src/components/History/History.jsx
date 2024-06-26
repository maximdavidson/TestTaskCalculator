import React from 'react';

import { useHistoryContext } from './HistoryContext';

function History() {
	const { history } = useHistoryContext();

	return (
		<div className="history">
			<ul data-testid="history-list">
				{history.map((operation, index) => (
					<li key={index}>{operation}</li>
				))}
			</ul>
		</div>
	);
}

export default History;
