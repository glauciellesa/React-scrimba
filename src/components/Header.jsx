import reactLogo from "../img/logo192.png";
import styled from "styled-components";

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
      </NavStyled>
    </nav>
  );
};

const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 5px 0.2px 8px #dadada;
  padding: 10px;
  .logo {
    display: flex;
    gap: 10px;
    color: #00d5ff;
  }
  img {
    width: 50px;
    height: 50px;
  }
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    font-weight: bold;
    color: #00d5ff;
  }
`;
