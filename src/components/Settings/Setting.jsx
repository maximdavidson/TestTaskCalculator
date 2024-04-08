import React from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { HistoryContext } from "../History/HistoryContext";
import styled from 'styled-components'
import Snackbar from "./Snackbar";


const Wrapper = styled.div`
  margin-left: 70px;
`;
const Title = styled.h1`
  ...
`;

const Select = styled.select`
  margin-top: 10px;
  display: flex;
  width: 10%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #959595;
  background-color: ${props => props.theme.selectBackground}; // Установка цвета фона
  color: ${props => props.theme.selectColor}; // Установка цвета текста
`;

const Option = styled.option`
  border-radius: 0px;
  font-size: 15px;
`;

const Button = styled.button`
  padding: 12px 35px;
  border: none;
  border-radius: 5px;
  background-color: #595959;
  color: white;
  cursor: pointer;
  margin-top: 20px; 

  &:hover {
    background-color: #707070;
  }

  &:active {
    position: relative;
    top: 4px;
  }
`;

class Settings extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      isSnackbarVisible: false,
    };
  }

  handleThemeChange = (event) => {
    this.context.setTheme(event.target.value);
  };

  render() {
    return (
      <HistoryContext.Consumer>
        {({ clearHistory }) => (
          <Wrapper>
            <Title>Settings</Title>
            <div>
              <label htmlFor='theme'>Switch Theme</label>
              <Select id='theme' name='theme' value={this.context.theme} onChange={this.handleThemeChange}>
                <Option value='light'>Light theme</Option>
                <Option value='dark'>Dark theme</Option>
              </Select>
              <Button onClick={() => {
                clearHistory();
                this.setState({ isSnackbarVisible: true });
              }}>Clear History</Button>
              <Snackbar isVisible={this.state.isSnackbarVisible} message="History cleared" />
            </div>
          </Wrapper>
        )}
      </HistoryContext.Consumer>
    );
  }
}

export default Settings; 








// import React, {useState} from "react";
// import { useTheme } from "../../theme/ThemeContext";
// import { useHistoryContext } from "../History/HistoryContext";
// import styled from 'styled-components'
// import Snackbar from "./Snackbar";


// const Wrapper = styled.div`
//   margin-left: 70px;
// `;
// const Title = styled.h1`
//   ...
// `;

// const Select = styled.select`
//   margin-top: 10px;
//   display: flex;
//   width: 10%;
//   padding: 10px;
//   border-radius: 5px;
//   border: 2px solid #959595;
//   background-color: ${props => props.theme.selectBackground}; // Установка цвета фона
//   color: ${props => props.theme.selectColor}; // Установка цвета текста
// `;

// const Option = styled.option`
//   border-radius: 0px;
//   font-size: 15px;
// `;

// const Button = styled.button`
//   padding: 12px 35px;
//   border: none;
//   border-radius: 5px;
//   background-color: #595959;
//   color: white;
//   cursor: pointer;
//   margin-top: 20px; 

//   &:hover {
//     background-color: #707070;
//   }

//   &:active {
//     position: relative;
//     top: 4px;
//   }
// `;

// function Settings(){
//   const { theme, setTheme } = useTheme();
//   const {clearHistory} = useHistoryContext();
//   const [isSnackbarVisible, setIsSnackbarVisible] = useState(false); // Состояние для контроля видимости Snackbar

//   const handleThemeChange = (event) => {
//     setTheme(event.target.value);
//   };

//   const handleClearHistory = () => {
//     clearHistory();
//     // После очистки истории, отображаем Snackbar с сообщением
//     setIsSnackbarVisible(true);
//   };

//   return(
//     <Wrapper>
//        <Title>Settings</Title>
//        <div>
//           <label htmlFor='theme'>Switch Theme</label>
//           <Select id='theme' name='theme' value={theme} onChange={handleThemeChange}>
//              <Option value='light'>Light theme</Option>
//              <Option value='dark'>Dark theme</Option>
//           </Select>
//           <Button onClick={handleClearHistory}>Clear History</Button>
//           <Snackbar isVisible={isSnackbarVisible} message="History cleared" />
//        </div>
//     </Wrapper>
//   )
// }