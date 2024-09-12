import ArtPieces from "@/components/ArtPieces/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <h1>Art Pieces</h1>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      ;
    </>
  );
}
