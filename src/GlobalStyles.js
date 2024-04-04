import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
`;

// // Определение стилизованного компонента Select
// const StyledSelect = styled.select`
//   background-color: ${(props) => props.theme.body};
//   color: ${(props) => props.theme.text};
//   border: 1px solid ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
//   /* Добавьте необходимые стили */

//   &:focus {
//     border-color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
//   }
// `;

// // Определение стилизованного компонента Option
// // Обычно для <option> не требуется много стилизации, но если нужно, можно добавить
// const StyledOption = styled.option`
//   background-color: ${(props) => props.theme.body};
//   color: ${(props) => props.theme.text};
//   /* Добавьте необходимые стили */
// `;