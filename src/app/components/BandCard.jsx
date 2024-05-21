import {useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Image from "next/image";
import Link from "next/link";

export default function BandCard({ name, img, alt, slug }) {
  return (
    <div className="p-4 rounded-md shadow-md mb-4">
      <Link className="block"
        href={`/lineup/${slug}`}>

        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src="https://source.unsplash.com/random/720x480?random=35372"
            width={500}
            height={500}
            alt="test testensen"
        />
        </div>
      </Link>
    </div>
  );
}





