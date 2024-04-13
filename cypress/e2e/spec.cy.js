describe('Arithmetic operations', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('Addition', () => {
		cy.contains('button', '5').click();
		cy.contains('button', '+').click();
		cy.contains('button', '7').click();
		cy.contains('button', '=').click();
		cy.get('#display').should('have.text', '12');
	});

	it('Subtraction', () => {
		cy.contains('button', '9').click();
		cy.contains('button', '-').click();
		cy.contains('button', '3').click();
		cy.contains('button', '=').click();
		cy.get('#display').should('have.text', '6');
	});

	it('Multiplication', () => {
		cy.contains('button', '2').click();
		cy.contains('button', '*').click();
		cy.contains('button', '5').click();
		cy.contains('button', '=').click();
		cy.get('#display').should('have.text', '10');
	});

	it('Division', () => {
		cy.contains('button', '1').click();
		cy.contains('button', '8').click();
		cy.contains('button', '/').click();
		cy.contains('button', '6').click();
		cy.contains('button', '=').click();
		cy.get('#display').should('have.text', '3');
	});

	it('Residue from division', () => {
		cy.contains('button', '1').click();
		cy.contains('button', '7').click();
		cy.contains('button', '%').click();
		cy.contains('button', '6').click();
		cy.contains('button', '=').click();
		cy.get('#display').should('have.text', '5');
	});
});

// ---------------------------------------------------------

describe('Keypad module', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('Pressing number buttons', () => {
		for (let i = 0; i <= 9; i++) {
			const digit = String(i);
			cy.contains('button', 'C').click();
			cy.contains('button', digit).click();
			cy.get('#display').should('have.text', digit);
		}
	});

	it('Pressing arithmetic operator buttons', () => {
		const operators = ['+', '-', '*', '/', '%'];
		operators.forEach((operator) => {
			cy.contains('button', operator).click();
			// Проверяем, что после нажатия оператора можно ввести второе число
			cy.contains('button', '1').click();
			cy.get('#display').should('contain', '1');
		});
	});

	it('Pressing special functional buttons', () => {
		const specialButtons = ['C', 'CE', '=', '.', '+/-'];
		specialButtons.forEach((button) => {
			cy.contains('button', button).click();
			if (button === 'C' || button === 'CE') {
				cy.get('#display').should('have.text', '0');
			} else if (button === '=') {
				cy.contains('button', '1').click();
				cy.contains('button', '+').click();
				cy.contains('button', '1').click();
				cy.contains('button', button).click();
				cy.get('#display').should('have.text', '2');
				cy.contains('button', 'C').click();
			} else if (button === '.') {
				cy.contains('button', 'C').click();
				cy.contains('button', '1').click();
				cy.contains('button', button).click();
				cy.contains('button', '1').click();
				cy.get('#display').should('have.text', '1.1');
				cy.contains('button', 'C').click();
			} else if (button === '+/-') {
				cy.contains('button', '1').click();
				cy.contains('button', button).click();
				cy.get('#display').should('have.text', '-1');
			}
		});
	});
});

// ---------------------------------------------------------

describe('Display module', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('renders the correct value', () => {
		cy.contains('button', '1').click();
		cy.contains('button', '2').click();
		cy.contains('button', '3').click();

		cy.get('#display').should('have.text', '123');
	});
});

// ---------------------------------------------------------

describe('Navigation module', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('navigates to Home when Home link is clicked', () => {
		cy.contains('a', 'Home').click();
		cy.url().should('include', '/home');
	});

	it('navigates to Settings when Settings link is clicked', () => {
		cy.contains('a', 'Settings').click();
		cy.url().should('include', '/settings');
	});
});

// ---------------------------------------------------------

describe('Theme switch module', () => {
	beforeEach(() => {
		cy.visit('localhost:3000/settings');
	});

	it('switches to Light theme when Light theme is selected', () => {
		cy.get('#theme').select('light');
		cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
		cy.get('body').should('have.css', 'color', 'rgb(0, 0, 0)');
	});

	it('switches to Dark theme when Dark theme is selected', () => {
		cy.get('#theme').select('dark');
		cy.get('body').should('have.css', 'background-color', 'rgb(51, 51, 51)');
		cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)');
	});
});

// ---------------------------------------------------------

describe('History module', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('adds an operation to the history after it is performed', () => {
		cy.contains('button', '1').click();
		cy.contains('button', '+').click();
		cy.contains('button', '1').click();
		cy.contains('button', '=').click();

		// Открыть историю
		cy.get('[data-testid="control-panel-button"]').click();

		cy.get('[data-testid="history-list"]').should('contain', '1 + 1 = 2');
	});
});

// ---------------------------------------------------------

describe('History clearing', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('clears the history when Clear History button is clicked', () => {
		cy.contains('button', '1').click();
		cy.contains('button', '+').click();
		cy.contains('button', '1').click();
		cy.contains('button', '=').click();

		cy.visit('localhost:3000/settings');

		cy.contains('button', 'Clear History').click();

		cy.visit('localhost:3000');

		cy.get('[data-testid="control-panel-button"]').click();

		cy.get('[data-testid="history-list"]').should('be.empty');
	});
});
