import reactLogo from "../img/logo192.png";
import styled from "styled-components";

export default () => {
  return (
    <nav>
      <Logo>
        <img src={reactLogo} alt="React's logo" />
      </Logo>
    </nav>
  );
};

const Logo = styled.div`
  margin: 20px;
  img {
    width: 50px;
    height: 50px;
  }
`;
