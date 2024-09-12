import ArtPieces from "@/components/ArtPieces/ArtPieces";

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
    <div>
      <h1>My Favorite Art Pieces</h1>
      {favoritePieces.length > 0 ? (
        <ArtPieces
          pieces={favoritePieces}
          onArtPiecesInfo={onArtPiecesInfo}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavoriteConfirm}
        />
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}
