import Spotlight from "@/components/Spotlight/Spotlight";

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
    </div>
  );
}
