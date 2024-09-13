import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";

// ColorPalette gestyled
const ColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;
// Farbe, die Kreis hat, wird als Props übergeben
// (in Funktion: color aus data übergeben und in return gemappt, dass jede Farbe eigenen Kreis bekommt
const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid #ddd;
`;

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
  colors,
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
      <Comments comments={comments} />
      <CommentForm onSubmitComment={(comment) => onAddComment(slug, comment)} />
      <h3>Color Palette</h3>
      <ColorPalette>
        {/* mappen über Farben (aus data)*/}
        {colors.map((color, index) => (
          <ColorCircle key={index} color={color} />
        ))}
      </ColorPalette>
    </div>
  );
}
