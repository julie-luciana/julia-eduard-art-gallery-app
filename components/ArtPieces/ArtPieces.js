import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <div>
      {pieces.map((piece) => (
        <div key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={piece.isFavorite}
            onToggleFavorite={onToggleFavorite} // Funktion zum Umschalten des Favoritenstatus übergeben
          />
          {/* Link ohne <a> */}
          <Link href={`/art-pieces/${piece.slug}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
