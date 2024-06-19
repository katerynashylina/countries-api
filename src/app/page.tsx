import CountryCard from "@/components/CountryCard/CountryCard";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import { regions } from "@/helpers/consts";
import { getAllCountries } from "@/helpers/getCountries";
import { CountryType } from "@/types/CountryType";

export default async function Home() {
  const countries: CountryType[] = await getAllCountries();


  return (
    <main className="page">
      <div className="page__top">
        <Search />

        <Filter
          options={regions}
        />
      </div>

      <div className="page__countries">
        {countries.map(country => (
          <CountryCard
            country={country}
            key={country.id}
          />
        ))}
      </div>
    </main>
  );
}
