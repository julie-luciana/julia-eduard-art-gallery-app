import ArtPieceDetail from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return <div>Loading...</div>;
  }
  // destructure currentArtPiece to return it with this names from API
  const { name, year, genre, imageSource, artist } = currentArtPiece;

  console.log(imageSource);
  return (
    <>
      <ArtPieceDetail
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
      <Link href="/art-pieces">
        <button>Back to Gallery</button>
      </Link>
    </>
  );
}
