import {useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";

export default async function BandCard ({name, img, alt}){
    return (
  <div>
    <a href="">
    <h2>{name}</h2>
    <img src={img} alt={alt} />
    </a>
  </div>
    )
    
//:D
}