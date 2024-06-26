import Image from "next/image";
import { notFound } from "next/navigation";
import BorderCountry from "@/components/BorderCountry/BorderCountry";
import { getCountryNamesAndUrls } from "@/helpers/getBorderCountries";
import { getCountryDetails } from "@/helpers/getCountries";
import { CountryType } from "@/types/CountryType";
import "./CountryPage.scss";

type Props = {
  params: { countryName: string }
}

const Country = async ({ params }: Props) => {
  const countryData: CountryType[] = await getCountryDetails(params.countryName);
  
  if (!countryData) notFound();

  const country = countryData[0];

  const codes = country.borders;
  const borderCountries = codes ? await getCountryNamesAndUrls(codes) : [];

  let haveCurrencies = country.currencies && Object.keys(country.currencies).length > 0;
  let currency;
  if (haveCurrencies) {
    const currencyCode = Object.keys(country.currencies)[0];
    currency = country.currencies[currencyCode];
  }

  return (
    <div className="country">
      <Image
        src={country.flags.svg}
        alt={country.flags.alt}
        width={502}
        height={280}
        style={{ objectFit: "cover" }}
      />

      <div className="country__wrapper">
        <h1>{country.name.common}</h1>

        <p className="country__info" style={{ marginBottom: "10px" }}>
          <span><b>Official name:</b> {country.name.official}</span>
          <span><b>Population:</b> {country.population}</span>
          <span><b>Region:</b> {country.region}</span>
          <span><b>Sub Region:</b> {country.subregion}</span>
          <span><b>Capital:</b> {country.capital}</span>
        </p>

        <p className="country__info">
          {country.tld && (
            <span><b>Top Level Domain:</b> {country.tld}</span>
          )}
          {haveCurrencies && currency && (
            <span><b>Currencies:</b> {currency.name}</span>
          )}
        </p>

        {!!borderCountries?.length && (
          <>
            <h2>Border Countries:</h2>
            <div className="country__border">
              {borderCountries.map(c => (
                <BorderCountry
                  country={c}
                  key={c.url}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
};

export default Country;