import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        // layout="responsive" // Das Bild wird proportional verkleinert/vergrößert
        width={100} // relative Breite, keine feste Pixel-Angabe
        height={100}
      />
      <h2>{title}</h2>
      <p> {artist} </p>
      {/* Direkt isFavorite und onToggleFavorite verwenden */}
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </div>
  );
}
