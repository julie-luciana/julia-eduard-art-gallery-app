import ArtPieces from "@/components/ArtPieces/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />;
      <FavoriteButton />
    </>
  );
}
