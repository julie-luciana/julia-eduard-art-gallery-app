import ArtPieceDetail from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return <div>Loading...</div>;
  }
  // destructure currentArtPiece to return it with this names from API
  const { name, year, genre, imageSource, artist, isFavorite } =
    currentArtPiece;

  console.log(imageSource);
  return (
    <>
      <ArtPieceDetail
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        slug={slug} // slug übergeben für onToggleFavorite
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === currentArtPiece.slug)
            ?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(currentArtPiece.slug)}
      />
      <Link href="/art-pieces">
        <button>Back to Gallery</button>
      </Link>
    </>
  );
}
