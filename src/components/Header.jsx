import reactLogo from "../img/logo192.png";
import styled from "styled-components";

export default () => {
  return (
    <nav>
      <NavStyled>
        <img src={reactLogo} alt="React's logo" />

        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </NavStyled>
    </nav>
  );
};

const NavStyled = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
  }
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
`;
