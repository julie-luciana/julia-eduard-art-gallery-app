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
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <h2>{title}</h2>
      <p> {artist} </p>
      <FavoriteButton
        className="favorite-button-preview"
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)} // Der slug wird weitergegeben
      />
    </div>
  );
}
