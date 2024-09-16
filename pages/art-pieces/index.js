import ArtPieces from "@/components/ArtPieces/ArtPieces";
import styled from "styled-components";

const HeadingBox = styled.h1`
  display: flex;
  font-family: "Helvetica", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary);
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5%;
`;

const DescriptionArtPreview = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: italic;
`;

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <HeadingBox>Art Pieces</HeadingBox>
      <DescriptionArtPreview>
        Explore the world of art in our gallery.
      </DescriptionArtPreview>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      ;
    </>
  );
}
