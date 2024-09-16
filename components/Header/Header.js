import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  font-family: "Helvetica", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  z-index: 200;
`;

export default function Header() {
  return <HeaderWrapper>artgallery.</HeaderWrapper>;
}
