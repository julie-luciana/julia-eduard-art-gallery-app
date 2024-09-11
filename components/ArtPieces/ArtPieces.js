import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <div>
      {pieces.map((piece) => (
        <div key={piece.slug}>
          {/* link to details page */}
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
              slug={piece.slug} // Slug übergeben
              isFavorite={piece.isFavorite} // Hier den Favoritenstatus übergeben
              onToggleFavorite={onToggleFavorite} // Funktion zum Umschalten des Favoritenstatus übergeben
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
