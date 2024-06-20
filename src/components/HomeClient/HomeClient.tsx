"use client"
import { regions } from "@/helpers/consts";
import debounce from 'lodash.debounce';
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { CountryType } from "@/types/CountryType";
import CountryCard from "../CountryCard/CountryCard";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAllCountries, getCountryByRegion } from "@/helpers/getCountries";
import { setInput } from "@/redux/features/inputSlice";

type Props = {
  initialCountries: CountryType[],
}

const HomeClient = ({ initialCountries }: Props) => {
  const [countries, setCountries] = useState<CountryType[]>(initialCountries);
  const region = useAppSelector(store => store.regionReducer.region);
  const inputValue = useAppSelector(store => store.inputReducer.input);
  const [appliedQuery, setAppliedQuery] = useState('');
  const dispatch = useAppDispatch();

  const applyQuery = useCallback(debounce(setAppliedQuery, 800), [])

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
          el.name.common.toLowerCase().includes(appliedQuery.toLowerCase())
        );
      }

      setCountries(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadCountries();
  }, [region, appliedQuery, inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput((e.target.value)));
    applyQuery(e.target.value);
  }

  return (
    <main className="page">
      <div className="page__top">
        <Search
          onChange={handleInputChange}
        />

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