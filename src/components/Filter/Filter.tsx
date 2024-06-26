"use client"

import { useState } from "react";
import Image from "next/image";
import { Regionstype } from "@/types/RegionsType";
import arrowUp from "../../../public/arrow_up.svg";
import arrowDown from "../../../public/arrow_down.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRegion } from "@/redux/features/filterSlice";
import "./Filter.scss"

type Props = {
  options: Regionstype[],
}

const Filter = ({ options }: Props) => {
  const region = useAppSelector(store => store.regionReducer.region);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: Regionstype) => {
    dispatch(setRegion(option));
    setIsOpen(false);
  };

  return (
    <label>
      Filter by region:
      <div className="select">
        <div className="select__header" onClick={toggleDropdown}>
          {region ? region.name : 'Filter by Region'}
          
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
    </label>
  );
};

export default Filter