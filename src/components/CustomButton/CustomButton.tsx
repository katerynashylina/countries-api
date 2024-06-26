"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import backBtn from "../../../public/arrow_back.svg";
import "./CustomButton.scss"

type Props = {
  text: string,
}

const CustomButton = ({ text }: Props) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.back();
  }

  return (
    <button
      className="button"
      onClick={handleButtonClick}
    >
      <Image
        src={backBtn}
        alt="button back"
        height={28}
        width={28}
      />

      {text}
    </button>
  )
};

export default CustomButton;