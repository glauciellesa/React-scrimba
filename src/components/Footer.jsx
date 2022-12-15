import styled from "styled-components";

export default () => {
  const date = new Date().getFullYear();

  const lName = "Sá";
  return (
    <FooterStyled>
      © {date} {lName} development. All rights reserved.
    </FooterStyled>
  );
};

const FooterStyled = styled.p`
  padding: 10px;
  color: #06b5cd;
  background-color: #eefcff;
  box-shadow: 5px 0.2px 8px #dadada;
`;
