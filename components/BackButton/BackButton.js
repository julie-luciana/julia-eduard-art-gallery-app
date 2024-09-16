import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 170px;
  right: 20px;
  background-color: var(--color-active);
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

export default function BackButton({ comments = [] }) {
  // standard ist leeres Array
  return <Button>Back to gallery</Button>;
}
