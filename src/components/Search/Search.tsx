import Image from "next/image";
import "./Search.scss"
import search from "../../../public/search.svg";

const Search = () => {
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
      />
    </label>
  )
};

export default Search