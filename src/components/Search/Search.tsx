"use client"
import Image from "next/image";
import "./Search.scss"
import search from "../../../public/search.svg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setInput } from "@/redux/features/inputSlice";

const Search = () => {
  const inputValue = useAppSelector(store => store.inputReducer.input);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput(e.target.value))
  }

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
        onChange={handleInputChange}
      />
    </label>
  )
};

export default Search