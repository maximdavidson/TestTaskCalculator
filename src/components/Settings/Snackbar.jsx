import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SnackbarWrapper = styled.div`
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
   isVisible: PropTypes.string.isRequired,
 };
 
 export default Snackbar;