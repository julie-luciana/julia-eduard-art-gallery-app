import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function ArtPieceDetail({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={image}
        alt={artist}
        layout="responsive"
        width={100}
        height={100}
      />
      <p>{artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </div>
  );
}
