import useSWR from "swr";
import ArtPieces from "@/components/ArtPiece/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

function getRandomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}
export default function HomePage() {
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

  if (error) return <div>failed to load</div>;
  if (!data) {
    return <div>loading...</div>;
  }

  const randomPiece = getRandomArtPiece(data);

  return (
    <div>
      <h1>Art Gallery </h1>
      <ArtPieces pieces={data} />
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
    </div>
  );
}
