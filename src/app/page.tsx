import HomeClient from "@/components/HomeClient/HomeClient";
import { getAllCountries, getCountryByRegion } from "@/helpers/getCountries";
import { CountryType } from "@/types/CountryType";
import { notFound } from "next/navigation";

export default async function Home() {  
  const initialCountries: CountryType[] = await getAllCountries();

  if (!initialCountries) notFound();

  return (
    <HomeClient
      initialCountries={initialCountries}
    />
  );
}
