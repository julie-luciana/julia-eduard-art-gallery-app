import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Spotlight:</h2>
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
