"use client"
import { useRouter } from "next/navigation";
import "./BorderCountry.scss"

type Props = {
  country: { name: string, url: string }
}

const BorderCountry = ({ country }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${country.name}`)
  }

  return (
    <div onClick={handleClick} className="border">
      {country.name}
    </div>
  )
};

export default BorderCountry