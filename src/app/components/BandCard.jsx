import {useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Image from "next/image";

export default async function BandCard ({name, img, alt}){
    return (
  <div>
    <a href="">
    <h2>{name}</h2>
    {/* <img src={`@/app/assets/bands/${img}`} alt={alt} /> */}
   
   <Image
      src="https://source.unsplash.com/random/720x480?random=35372"
      width={500}
      height={500}
      alt="test testensen"
   />
    
 
    </a>
  </div>
    )
    
//:D
}