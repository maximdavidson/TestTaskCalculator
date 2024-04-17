import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

export const HistoryContext = createContext();

export const useHistoryContext = () => useContext(HistoryContext); // Функция для удобного доступа к контексту

export const HistoryProvider = ({children}) => {
   const [history, setHistory] = useState([]);

   const addHistoryItem = (item) => {
      setHistory((prevHistory) => [...prevHistory, item]);
   };

   const clearHistory = () => {
      setHistory([])
   };

   return(
      <HistoryContext.Provider value={{history, addHistoryItem, clearHistory}}>
         {children}
      </HistoryContext.Provider>
   )
}

HistoryProvider.propTypes = {
   children: PropTypes.node.isRequired
};