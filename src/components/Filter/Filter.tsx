"use client"

import { useState } from "react";
import "./Filter.scss"
import { Regionstype } from "@/types/RegionsType";
import arrowUp from "../../../public/arrow_up.svg";
import arrowDown from "../../../public/arrow_down.svg";
import Image from "next/image";

type Props = {
  options: Regionstype[],
}

const Filter = ({ options }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Regionstype | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: Regionstype) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="select">
      <div className="select__header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.name : 'Filter by Region'}
        
        <Image
          src={isOpen ? arrowUp : arrowDown}
          alt="arrow"
        />
      </div>
      {isOpen && (
        <ul className="select__list">
          {options.map((option) => (
            <li
              key={option.id}
              className="select__option"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter