type NativeNameEntry = {
  official: string;
  common: string;
};

type NativeNameType = {
  [key: string]: NativeNameEntry;
};

type CountryNameType = {
  common: string;
  official: string;
  nativeName: NativeNameType;
};

type CurrencyDetail = {
  name: string;
  symbol: string;
};

type Currencies = {
  [code: string]: CurrencyDetail;
};

export type CountryType = {
  name: CountryNameType,
  tld: string[],
  currencies: Currencies,
  capital: string[],
  region: string,
  subregion: string,
  languages: string[],
  population: number,
  flags: { svg: string, alt: string },
  borders: string[],
  id: number,
  map: { googleMaps: string }
}