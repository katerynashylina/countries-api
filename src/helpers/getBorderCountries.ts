import { getCountryByCode } from "./getCountries";

type CountryData = {
  name: {
    common: string;
  };
};


export const getCountryNamesAndUrls = async (codes: string[]) => {
  const countries: { name: string; url: string }[] = [];

  if (codes && codes.length) {
    for (const code of codes) {
      const countryData: CountryData[] = await getCountryByCode(code);
      
      if (countryData && countryData[0]) {
        const countryName = countryData[0].name.common;
        const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
        countries.push({ name: countryName, url: countryUrl });
      }
    }
  
    return countries;
  }

  return null;
};