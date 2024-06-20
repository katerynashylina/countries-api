import { CountryType } from "@/types/CountryType";
import "./CountryCard.scss"
import Image from "next/image";

const CountryCard = ({ country }: {country: CountryType}) => {
  return (
    <div className="card">
      <Image
        src={country.flags.svg}
        alt={country.name.common}
        width={200}
        height={170}
        className="card__image"
      />

      <div className="card__info">
        <strong>{country.name.common}</strong>

        <p><b>Population:</b> {country.population}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Capital:</b> {country.capital}</p>
      </div>
    </div>
  )
};

export default CountryCard