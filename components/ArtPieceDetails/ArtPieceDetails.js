import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-primary);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh; /* Bild nimmt die obere Hälfte des Bildschirms ein */
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  background-color: var(--color-background-details);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  overflow-y: auto;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* DetailsContainer nimmt die untere Hälfte des Bildschirms ein */
  }
`;

const ArtistDetails = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 1.1rem;
`;

const HeadingDetails = styled.h1`
  margin-top: 60px;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

const StyledImage = styled(Image)`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

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

const CommentsSection = styled.div`
  border-top: 1px solid #ddd;
  flex: 1;
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  margin-top: 20px;
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
    <Container>
      <ImageContainer>
        <StyledImage
          src={image}
          alt={artist}
          layout="intrinsic"
          width={1000}
          height={1000}
        />
      </ImageContainer>

      <DetailsContainer>
        <FavoriteButton
          className={"favorite-button-details"}
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(slug)}
        />
        <HeadingDetails>{title}</HeadingDetails>
        <ArtistDetails>{artist}</ArtistDetails>
        <Description>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
        </Description>

        <h3>Color Palette</h3>
        <ColorPalette>
          {/* mappen über Farben (aus data)*/}
          {colors.map((color, index) => (
            <ColorCircle key={index} color={color} />
          ))}
        </ColorPalette>
        <CommentsSection>
          <Comments comments={comments} />
        </CommentsSection>
        <CommentForm
          onSubmitComment={(comment) => onAddComment(slug, comment)}
        />
      </DetailsContainer>
    </Container>
  );
}
