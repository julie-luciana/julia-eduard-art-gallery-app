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

  // global state of artPiecesInfo
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // artPiecesInfo ist ein neues Objekt,
  // was soll alles hinzugefügt werden, wenn Objekt leer && daten vorhanden?
  // -> slug & isFavorite (später auch comment)
  useEffect(() => {
    if (data && artPiecesInfo.length === 0) {
      setArtPiecesInfo(
        data.map((piece) => ({
          slug: piece.slug,
          isFavorite: false,
        }))
      );
    }
  }, [data, artPiecesInfo]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((pieces) =>
      pieces.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }

  // Kunstwerke mit Favoriteninformationen kombinieren
  const pieces = data?.map((piece) => ({
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
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
