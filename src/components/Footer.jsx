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
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.footerColor};
  box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);
`;
