import ArtPieces from "@/components/ArtPieces/ArtPieces";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin-bottom: 50px;
`;

const HeadingFavorites = styled.h1`
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

const NoFavoritesMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: italic;
  color: var(--color-active);
  margin: 20%;
`;

export default function FavoritesPage({
  artPiecesInfo,
  pieces,
  onToggleFavorite,
  onArtPiecesInfo,
}) {
  // Sicherstellen, dass die Daten korrekt ankommen
  console.log("artPiecesInfo:", artPiecesInfo);
  console.log("pieces:", pieces);

  // Filtere alle Kunstwerke, die als Favorit markiert sind
  const favoritePieces = pieces.filter((piece) => {
    const pieceInfo = artPiecesInfo.find((info) => info.slug === piece.slug);
    return pieceInfo && pieceInfo.isFavorite;
    // Nur Favoriten zurückgeben
  });

  function handleToggleFavoriteConfirm(slug) {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item from your favorites?"
    );
    if (confirmed) {
      onToggleFavorite(slug);
    }
  }
  return (
    <Container>
      <HeadingFavorites>Favorites</HeadingFavorites>

      {favoritePieces.length > 0 ? (
        <ArtPieces
          pieces={favoritePieces}
          onArtPiecesInfo={onArtPiecesInfo}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavoriteConfirm}
        />
      ) : (
        <NoFavoritesMessage>No favorites found.</NoFavoritesMessage>
      )}
    </Container>
  );
}
