import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

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

  // global state for artPiecesInfo
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  // artPiecesInfo ist ein neues Objekt, das in data "gepusht" werden soll
  // was soll alles hinzugefügt werden, wenn Objekt leer && data von API vorhanden?
  // -> slug & isFavorite (später auch comment)
  useEffect(() => {
    if (data && artPiecesInfo.length === 0) {
      setArtPiecesInfo(
        data.map((piece) => ({
          slug: piece.slug,
          isFavorite: false,
          comments: [],
        }))
      );
    }
  }, [data, artPiecesInfo, setArtPiecesInfo]);

  // toggle favorite für artPiecesInfo (ändert nur isFavorite von artPiecesInfo)
  function handleToggleFavorite(slug) {
    setArtPiecesInfo((pieces) =>
      pieces.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }

  // add comment für artPiecesInfo (ändert nur commentar von artPiecesInfo)
  function handleAddComment(slug, comment) {
    setArtPiecesInfo((pieces) =>
      pieces.map((piece) =>
        piece.slug === slug
          ? {
              ...piece,
              comments: [...(piece.comments || []), comment], // neuer comment unter altem comment oder neues array für neuen comment
            }
          : piece
      )
    );
  }

  // Sind data aus API da? -> nennen wir pieces, werden array hinzugefügt
  // gibt es veränderte Infos für isFavorite und/oder neuen comment?
  // veränderte Infos entspricht artPiecesInfo
  // -> falls es gibt -> fügt sie ggf data aus API (=pieces) hinzu
  const pieces = data?.map((piece) => ({
    ...piece,
    isFavorite:
      artPiecesInfo.find((info) => info.slug === piece.slug)?.isFavorite ||
      false,
    comments:
      artPiecesInfo.find((info) => info.slug === piece.slug)?.comments || [],
  }));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // Funktionen als props an alle components weitergeben können
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onAddComment={handleAddComment}
      />
    </>
  );
}
