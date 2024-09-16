import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--color-primary);
  color: lightgray;
  text-align: center;
  padding: 40px;
  position: relative;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  bottom: 0;
  border-top: 1px solid var(--color-primary);
  z-index: 200;
`;

const FooterText = styled.p`
  margin: 0;
  font-weight: 10;
  font-size: 0.7rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>© 2024 Art Gallery App by Julia and Eduard</FooterText>
    </FooterWrapper>
  );
}
