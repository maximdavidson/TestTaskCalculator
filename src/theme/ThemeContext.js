import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


// Валидация пропов в React - это способ убедиться, что компоненты получают правильные пропы (свойства), и 
// они правильного типа. Это очень полезно во время разработки, потому что помогает выявить потенциальные 
// проблемы.
// Валидация пропов обычно выполняется с помощью библиотеки prop-types.
// В вашем случае, вы получили предупреждение о том, что проп children не был валидирован. Это произошло, 
// потому что вы использовали children в вашем компоненте ThemeProvider, 
// но не указали его в propTypes для этого компонента.