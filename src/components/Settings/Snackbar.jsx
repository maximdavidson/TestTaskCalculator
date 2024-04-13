import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SnackbarWrapper } from './styled';

const Snackbar = ({ message, isVisible }) => {
	const [show, setShow] = useState(isVisible);

	useEffect(() => {
		setShow(isVisible);
		if (isVisible) {
			const timer = setTimeout(() => setShow(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [isVisible]);

	return <SnackbarWrapper show={show}>{message}</SnackbarWrapper>;
};

Snackbar.propTypes = {
	message: PropTypes.string.isRequired,
	isVisible: PropTypes.bool.isRequired,
};

export default Snackbar;
