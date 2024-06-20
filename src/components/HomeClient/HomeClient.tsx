"use client"
import { regions } from "@/helpers/consts";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { CountryType } from "@/types/CountryType";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { getAllCountries, getCountryByRegion } from "@/helpers/getCountries";

type Props = {
  initialCountries: CountryType[],
}

const HomeClient = ({ initialCountries }: Props) => {
  const [countries, setCountries] = useState<CountryType[]>(initialCountries);
  const region = useAppSelector(store => store.regionReducer.region);
  const inputValue = useAppSelector(store => store.inputReducer.input);

  const loadCountries = async () => {
    try {
      let data = [ ...initialCountries ];

      if (region.name === "All") {
        data = await getAllCountries();
      } else {
        data = await getCountryByRegion(region.name);
      }

      if (inputValue) {
        data = data.filter((el: CountryType) =>
          el.name.common.toLowerCase().includes(inputValue.toLowerCase())
        );
      }

      setCountries(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadCountries();
  }, [region, inputValue])

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
  )
};

export default HomeClient