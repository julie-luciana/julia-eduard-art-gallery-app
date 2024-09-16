import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import styled from "styled-components";

const SpotlightWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const PieceName = styled.p`
  position: absolute;
  bottom: 70px;
  left: 1%;
  transform: translateX(1%);
  font-family: "Helvetica", sans-serif;
  font-size: 5rem;
  line-height: 0.9;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  z-index: 3;
  opacity: 0;
  animation: fadeInSlideUp 2s ease-out forwards;
  max-width: 90%;
  text-align: left;
  overflow-wrap: break-word;

  @keyframes fadeInSlideUp {
    0% {
      opacity: 0;
      transform: translate(0%, 20px);
    }
    100% {
      opacity: 1;
      transform: translate(0%, 0);
    }
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    bottom: 70px;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
    bottom: 70px;
    max-width: 90%;
  }
`;

const ArtistName = styled.p`
  position: absolute;
  bottom: 50px;
  left: 1%;
  transform: translateX(1%);
  font-family: "Helvetica", serif;
  font-size: 2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  z-index: 3;
  opacity: 0;

  animation: fadeInSlideUp 3s ease-out forwards;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(to bottom, transparent, var(--color-primary));
  z-index: 2;
`;
const GradientOverlayTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, transparent, rgb(255, 255, 255, 0.4));
  z-index: 0;
`;

const SpotlightFavoriteButton = styled(FavoriteButton)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
`;
export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
  title,
}) {
  return (
    <SpotlightWrapper>
      <GradientOverlayTop />
      <SpotlightFavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <StyledImage
        src={image}
        alt={artist}
        layout="fill"
        objectFit="cover"
        priority
      />

      <PieceName>{title}</PieceName>
      <ArtistName>{artist}</ArtistName>
      <GradientOverlay />
    </SpotlightWrapper>
  );
}
