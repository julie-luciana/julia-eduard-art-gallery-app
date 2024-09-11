import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

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

  //   //______________
  //   useEffect(() => {
  //     if (data) {
  //       setArtPiecesInfo((currentInfo) =>
  //         data.map((piece) => {
  //           const existingPiece = currentInfo.find((info) => info.slug === piece.slug);
  //           return existingPiece || { slug: piece.slug, isFavorite: false };
  //         })
  //       );
  //     }
  //   }, [data]);

  //   // Funktion, um den Favoritenstatus eines Kunstwerks umzuschalten
  //   const toggleFavorite = (slug) => {
  //     setArtPiecesInfo((currentInfo) =>
  //       currentInfo.map((piece) =>
  //         piece.slug === slug ? { ...piece, isFavorite: !piece.isFavorite } : piece
  //       )
  //     );
  //   };
  //  // ___________________
  const [isFavorite, setIsFavorite] = useState(false);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  if (error) return <div>failed to load</div>;
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Layout />

      <Component
        {...pageProps}
        isFavorite={isFavorite}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
