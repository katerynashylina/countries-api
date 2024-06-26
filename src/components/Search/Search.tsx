"use client"
import Image from "next/image";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import search from "../../../public/search.svg";
import "./Search.scss"

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Search = ({ onChange }: Props) => {
  const inputValue = useAppSelector(store => store.inputReducer.input);
  const dispatch = useAppDispatch();

  return (
    <label className="search">
      <button className="search__button">
        <Image
          src={search}
          alt="search"
          className="search__image"
        />
      </button>

      <input
        type="text"
        className="search__input"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={onChange}
      />
    </label>
  )
};

export default Search