import Heart from "./Heart"; // Verwende die Heart-Komponente korrekt
import styled from "styled-components";

// syling von Heart-Komponente
const StyledHeart = styled(Heart)`
  width: 28px;
  height: 28px;
  fill: ${({ isFavorite }) => (isFavorite ? "red" : "none")};
  stroke: ${({ isFavorite }) => (isFavorite ? "none" : "black")};
  stroke-width: 1px;

  &:hover {
    fill: ${({ isFavorite }) =>
      isFavorite ? "darkred" : "none"}; /* Farbänderung beim Hover */
    stroke: ${({ isFavorite }) =>
      isFavorite ? "darkred" : "grey"}; /* Randänderung beim Hover */
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button onClick={onToggleFavorite}>
      <StyledHeart isFavorite={isFavorite} />
    </Button>
  );
}
