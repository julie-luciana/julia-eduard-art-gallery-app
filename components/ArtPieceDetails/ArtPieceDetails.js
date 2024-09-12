import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

export default function ArtPieceDetail({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
  comments,
  onAddComment,
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

      {/* Favorite Button */}
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
      />

      {/* Kommentare anzeigen */}
      <Comments comments={comments} />

      {/* Kommentarformular */}
      <CommentForm onSubmitComment={(comment) => onAddComment(slug, comment)} />
    </div>
  );
}
