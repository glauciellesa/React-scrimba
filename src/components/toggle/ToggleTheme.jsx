import React, { useContext } from "react";
import { MyThemeContext } from "../../theme/contexts/ThemeContext";
import styled from "styled-components";

function ToggleTheme() {
  const { theme, setTheme } = useContext(MyThemeContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <StyledToggle>
      <input onClick={toggleTheme} type="checkbox" id="darkmode" />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span role="img" aria-label="noite">
          🌙
        </span>
        <span role="img" aria-label="dia">
          ☀️
        </span>
      </label>
    </StyledToggle>
  );
}

const StyledToggle = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  background-color: #333333;
  border: 0;
  padding: 2px;
  font-size: 10px;
  width: 35px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  label {
    width: 35px;
  }
  span {
    display: inline-flex;
    width: 15px;
    height: 15px;
    align-items: center;
    justify-content: center;
  }

  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export default ToggleTheme;
