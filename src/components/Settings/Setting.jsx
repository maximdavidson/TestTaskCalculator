import React from "react";
import c from './Setting.module.css'
import { useTheme } from "../../ThemeContext";
import styled from 'styled-components'

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
`;

const Option = styled.option`
  border-radius: 0px;
  font-size: 15px;
`;

function Settings(){
  const { setTheme } = useTheme(); // Используйте функцию setTheme из контекста

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return(
    <Wrapper>
       <Title>Settings</Title>
       <div>
          <label htmlFor='theme'>Switch Theme</label>
          <Select id='theme' name='theme' onChange={handleThemeChange}>
             <Option value='light'>Light theme</Option>
             <Option value='dark'>Dark theme</Option>
          </Select>
       </div>
    </Wrapper>
  )
}

export default Settings;