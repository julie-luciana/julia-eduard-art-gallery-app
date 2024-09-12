import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState, useEffect } from "react";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the images.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const { data, error } = useSWR(URL, fetcher);

  // Globaler Zustand für artPiecesInfo (mit Favoritenstatus)
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // Initialisiere artPiecesInfo mit den Kunstwerken aus der API
  useEffect(() => {
    if (data && artPiecesInfo.length === 0) {
      setArtPiecesInfo(
        data.map((piece) => ({
          slug: piece.slug,
          isFavorite: false, // Standardmäßig nicht favorisiert
        }))
      );
    }
  }, [data, artPiecesInfo]);

  // Funktion, um den Favoritenstatus umzuschalten
  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevInfo) =>
      prevInfo.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }
  // Kunstwerke mit Favoriteninformationen kombinieren
  const piecesWithFavorites = data?.map((piece) => ({
    ...piece,
    isFavorite:
      artPiecesInfo.find((info) => info.slug === piece.slug)?.isFavorite ||
      false,
  }));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout />

      <Component
        {...pageProps}
        pieces={piecesWithFavorites}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
