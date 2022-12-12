import reactLogo from "../img/logo192.png";
import styled from "styled-components";

export default () => {
  return (
    <>
      <nav>
        <Logo>
          <img src={reactLogo} alt="React's logo" />
        </Logo>
      </nav>
      <Body>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </Body>
    </>
  );
};

const Logo = styled.div`
  margin: 20px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const Body = styled.body`
  margin: 20px;
`;
