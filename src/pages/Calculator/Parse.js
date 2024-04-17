const calculateExpression = (expression) => {
	// Функция для определения приоритета оператора
	const precedence = (operator) => {
		if (operator === '+' || operator === '-') return 1;
		if (operator === '*' || operator === '/') return 2;
		return 0;
	};

	// Функция для преобразования выражения в обратную польскую запись (RPN)
	const toRPN = (expression) => {
		const operators = [];
		const output = [];

		const tokens = expression
			.split(/(\+|-|\*|\/|\(|\))/)
			.filter((token) => token.trim() !== '');

		tokens.forEach((token) => {
			if (!isNaN(parseFloat(token))) {
				// Если токен - число, добавляем его в выходную очередь
				output.push(token);
			} else if (token === '(') {
				// Если токен - открывающая скобка, помещаем ее в стек операторов
				operators.push(token);
			} else if (token === ')') {
				// Если токен - закрывающая скобка, выталкиваем операторы из стека в выходную очередь,
				// пока не встретим открывающую скобку
				while (
					operators.length > 0 &&
					operators[operators.length - 1] !== '('
				) {
					output.push(operators.pop());
				}
				// Удаляем открывающую скобку из стека
				operators.pop();
			} else {
				// Если токен - оператор, выталкиваем операторы из стека с более высоким или равным приоритетом
				// в выходную очередь, затем помещаем текущий оператор в стек
				while (
					operators.length > 0 &&
					precedence(operators[operators.length - 1]) >= precedence(token)
				) {
					output.push(operators.pop());
				}
				operators.push(token);
			}
		});

		// Выталкиваем оставшиеся операторы из стека в выходную очередь
		while (operators.length > 0) {
			output.push(operators.pop());
		}

		return output;
	};

	// Функция для вычисления выражения в обратной польской записи
	const evaluateRPN = (tokens) => {
		const stack = [];

		tokens.forEach((token) => {
			if (!isNaN(parseFloat(token))) {
				// Если токен - число, помещаем его в стек
				stack.push(parseFloat(token));
			} else {
				// Если токен - оператор, выполняем операцию над двумя верхними числами в стеке
				const operand2 = stack.pop();
				const operand1 = stack.pop();
				switch (token) {
					case '+':
						stack.push(operand1 + operand2);
						break;
					case '-':
						stack.push(operand1 - operand2);
						break;
					case '*':
						stack.push(operand1 * operand2);
						break;
					case '/':
						stack.push(operand1 / operand2);
						break;
					default:
						break;
				}
			}
		});

		// Возвращаем результат из стека
		return stack.pop();
	};

	// Преобразуем выражение в обратную польскую запись
	const rpnTokens = toRPN(expression);

	// Вычисляем результат выражения в обратной польской записи
	return evaluateRPN(rpnTokens);
};

export default calculateExpression;
