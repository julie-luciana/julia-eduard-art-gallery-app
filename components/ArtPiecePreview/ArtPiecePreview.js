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
      <Image src={image} alt={title} width={100} height={100} />
      <h2>{title}</h2>
      <p> {artist} </p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)} // Der slug wird weitergegeben
      />
    </div>
  );
}
