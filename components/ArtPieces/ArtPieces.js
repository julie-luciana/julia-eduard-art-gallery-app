import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const ImageItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin: 10px;
  a {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
  }

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  padding: 20px;
  text-align: center;
  border-radius: 8px;

  a {
    color: #fff;
    margin-top: 10px;
  }
`;

const HeadingInbox = styled.h2`
  display: inline-block;
  font-size: 0.9rem;
  bottom: 900px;
`;

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <ImageContainer>
      {pieces.map((piece) => (
        <ImageItem key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={piece.isFavorite}
            onToggleFavorite={onToggleFavorite} // Funktion zum Umschalten des Favoritenstatus übergeben
          />
          <Overlay className="overlay">
            <HeadingInbox>{piece.name}</HeadingInbox>
            <h2>{piece.artist}</h2>
            <Link href={`/art-pieces/${piece.slug}`}>View Details</Link>
          </Overlay>
        </ImageItem>
      ))}
    </ImageContainer>
  );
}
