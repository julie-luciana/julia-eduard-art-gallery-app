import ArtPieces from "@/components/ArtPieces/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <h1>Art Pieces</h1>
      <ArtPieces pieces={pieces} />;
    </>
  );
}
