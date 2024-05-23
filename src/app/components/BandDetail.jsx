import Image from "next/image";

export default function BandDetail({ band }) {
  return (
    <div>
      <h1>{band.name}</h1>
      <p>Genre: {band.genre}</p>
      <p>Members: {band.members.join(", ")}</p>
      <p>{band.bio}</p>
      <Image
        src={`http://localhost:8080/logos/${band.logo}`}
        width={500}
        height={500}
        alt={band.name}
      />
    </div>
  );
}