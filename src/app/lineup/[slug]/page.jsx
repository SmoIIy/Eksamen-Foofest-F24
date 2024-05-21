import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import BandDetail from "@/app/components/BandDetail";

export async function generateStaticParams() {
  const data = await fetchData(endpoint + "/bands");
  return Object.keys(data).map(key => ({
    slug: data[key].slug,
  }));
}

async function getBandData(slug) {
  const data = await fetchData(endpoint + "/bands");
  return Object.values(data).find(band => band.slug === slug);
}

export default async function BandPage({ params }) {
  const band = await getBandData(params.slug);
  return <BandDetail band={band} />;
}
