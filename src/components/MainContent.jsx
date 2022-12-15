import styled from "styled-components";

export default () => {
  return (
    <>
      <Body>
        <div className="content">
          <h1>Fun facts about React</h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </Body>
    </>
  );
};

const Body = styled.div`
  background-color: ${({ theme }) => theme.colorBody};
  width: 100vh;
  .content {
    padding: 20px;
    h1 {
      color: ${({ theme }) => theme.highlightColor};
      padding-bottom: 20px;
    }
    ul {
      list-style: none;
      color: white;
      color: ${({ theme }) => theme.fontColor};
      padding-bottom: 20px;
    }

    li::before {
      content: "☞ ";
      color: ${({ theme }) => theme.highlightColor};
    }
  }
`;
