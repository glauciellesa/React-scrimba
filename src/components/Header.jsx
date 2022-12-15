import reactLogo from "../img/logo192.png";
import styled from "styled-components";
import ToggleTheme from "./toggle/ToggleTheme";

export default () => {
  return (
    <nav>
      <NavStyled>
        <div className="logo">
          <img src={reactLogo} alt="React's logo" />
          <h3>React facts</h3>
        </div>
        <div>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <ToggleTheme />
      </NavStyled>
    </nav>
  );
};

const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colorNav};
  box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);
  padding: 10px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.highlightColor};
    h3 {
      font-weight: 900;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
  ul {
    display: flex;
    align-content: flex-end;
    gap: 20px;
    list-style: none;
    font-weight: bold;
    color: ${({ theme }) => theme.fontColor};
  }
`;
