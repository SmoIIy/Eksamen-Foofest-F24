import BandDetail from "@/app/components/BandDetail";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";

export default function BandPage({ band }) {
  return <BandDetail band={band} />;
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const data = await fetchData(endpoint + "/bands");

  const band = data.find((band) => band.slug === slug);

  return {
    props: {
      band,
    },
  };
}