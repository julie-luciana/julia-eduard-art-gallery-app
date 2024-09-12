import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  function getRandomArtPiece(pieces) {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }

  const randomPiece = getRandomArtPiece(pieces);
  const isFavorite = randomPiece.isFavorite;

  return (
    <div>
      <h1>Art Gallery - Spotlight</h1>

      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
      />
    </div>
  );
}
