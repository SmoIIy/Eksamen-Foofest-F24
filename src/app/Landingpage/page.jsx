import { fetchData } from "../modules/functions";
import { serverEndport } from "../modules/settings";

const data = fetchData(serverEndport + "/bands");
console.log("data is " + typeof data);

export default function Landingpage() {
    if (!Array.isArray(data)) {
        return <p>Error: Data is not in the expected format.</p>;
    }
    //det er som om at dataen der bliver fetched ikke er et array???
    //fordi det her bør egenligt virke

    return (
        // <ul>
        //      { {
        //         data.map((data, index) => (
        //             <li key={index}>
        //                 <p>{data.name}</p>
        //             </li>
        //         ))
        //     }
        //     <li>
        //         <p>
        //             {data.name}
        //         </p>
        //     </li>}
        // </ul>
        <div>
            {data.map((band, index) => (
                <div key={index}>
                    <p>Name: {band.name}</p>
                    <p>Genre: {band.genre}</p>
                    <p>Members: {band.members.join(", ")}</p>
                    <p>Bio: {band.bio}</p>
                    <img src={band.logo} alt={band.name + " logo"} />
                    <p>Logo Credits: {band.logoCredits}</p>
                    <p>Slug: {band.slug}</p>
                </div>
            ))}
        </div>
    );
}
