// type Language = {

// }

export type CountryType = {
  name: string,
  nativeName: { official: string },
  tld: string[],
  currencies: { XPF: { name: string, symbol: string } },
  capital: string[],
  region: string,
  languages: string[],
  population: number,
  flags: { svg: string },
  borders: string[],
  id: number,
}