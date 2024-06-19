const BASE_URL = 'https://restcountries.com/v3.1/';

const request = async (url: string) => {
  const res = await fetch(BASE_URL + url);

  if (!res.ok) return undefined;

  return res.json();
};

export const getAllCountries = () => request("all");
export const getCountryDetails = (name: string) => request(`name/${name}`);
export const getCountryByRegion = (region: string) => request(`region/${region}`);