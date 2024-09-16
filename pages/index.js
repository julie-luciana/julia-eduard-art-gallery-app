import { useState, useEffect } from "react";
import Spotlight from "@/components/Spotlight/Spotlight";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

const Header = styled.header`
  position: sticky;
  top: 0;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  // Verwende useState, um das zufällige Kunstwerk nur einmal beim ersten Render auszuwählen
  const [randomPiece, setRandomPiece] = useState(null);

  // Wähle das zufällige Kunstwerk beim ersten Render oder wenn die pieces sich ändern
  useEffect(() => {
    if (pieces.length > 0 && !randomPiece) {
      const randomIndex = Math.floor(Math.random() * pieces.length);
      setRandomPiece(pieces[randomIndex]);
    }
  }, [pieces, randomPiece]);

  // Falls noch kein Kunstwerk ausgewählt ist, zeige einen Ladezustand an
  if (!randomPiece) {
    return <div>Loading...</div>;
  }

  // Finde den aktuellen Favoritenstatus für das zufällige Kunstwerk aus dem artPiecesInfo-Zustand
  const currentPieceInfo = artPiecesInfo.find(
    (info) => info.slug === randomPiece.slug
  );
  const isFavorite = currentPieceInfo ? currentPieceInfo.isFavorite : false;

  return (
    <>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        title={randomPiece.name}
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
      />
    </>
  );
}
