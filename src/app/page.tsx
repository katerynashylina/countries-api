import HomeClient from "@/components/HomeClient/HomeClient";
import { getAllCountries, getCountryByRegion } from "@/helpers/getCountries";
import { CountryType } from "@/types/CountryType";

export default async function Home() {  
  const initialCountries: CountryType[] = await getAllCountries();

  return (
    <HomeClient
      initialCountries={initialCountries}
    />
  );
}
