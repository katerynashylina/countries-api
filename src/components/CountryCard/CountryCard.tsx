import { CountryType } from "@/types/CountryType";
import "./CountryCard.scss"
import Image from "next/image";

const CountryCard = ({ country }: {country: CountryType}) => {
  return (
    <div className="card">
      <Image
        src={country.flags.svg}
        alt={country.name}
        width={200}
        height={200}
      />
    </div>
  )
};

export default CountryCard