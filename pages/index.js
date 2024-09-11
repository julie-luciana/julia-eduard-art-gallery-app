import Spotlight from "@/components/Spotlight/Spotlight";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function SpotlightPage({ pieces }) {
  function getRandomArtPiece(pieces) {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }
  const randomPiece = getRandomArtPiece(pieces);

  return (
    <div>
      <h1>Art Gallery </h1>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
      <FavoriteButton />
    </div>
  );
}
