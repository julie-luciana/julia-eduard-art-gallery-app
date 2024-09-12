import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h2>Spotlight:</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image
        src={image}
        alt={artist}
        layout="responsive"
        width={100}
        height={100}
      />

      <p>{artist}</p>
    </div>
  );
}
