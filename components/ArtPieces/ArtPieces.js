import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces?.map((piece) => (
        <div key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
          />
        </div>
      ))}
    </div>
  );
}
