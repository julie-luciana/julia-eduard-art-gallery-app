import Heart from "./Heart"; // Verwende die Heart-Komponente korrekt
import styled from "styled-components";

// syling der Heart-Komponente
const StyledHeart = styled(Heart)`
  position: absolute;
  width: 28px;
  height: 28px;
  fill: ${({ isFavorite }) => (isFavorite ? "red" : "rgba(0, 0, 0, 0.4)")};
  stroke: ${({ isFavorite }) =>
    isFavorite ? "rgba(0, 0, 0, 0.4)" : "lightgray"};
  stroke-width: 0.5px;
  z-index: 10;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    fill: ${({ isFavorite }) =>
      isFavorite
        ? "darkred"
        : "rgba(0, 0, 0, 0.4)"}; /* Farbänderung beim Hover */
    stroke: ${({ isFavorite }) =>
      isFavorite
        ? "darkred"
        : "var(--color-hover)"}; /* Randänderung beim Hover */
  }
  &.favorite-button-preview {
    position: absolute;
    top: 5%;
    left: 5%;
  }
 &.favorite-button-details {
    position: absolute;
    top: 170px;
    right: 170px;
     width: 40px;
  height: 40px;

`;
// hässlichen Hintergrund entfernen
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

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  className,
}) {
  return (
    <Button onClick={onToggleFavorite}>
      <StyledHeart className={className} isFavorite={isFavorite} />
    </Button>
  );
}
