import { BsSearch } from "react-icons/bs";
import SearchStyle from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <div className={SearchStyle.icon}>
        <BsSearch className={SearchStyle.icon2} />

        <input
          className={SearchStyle.searchInput}
          type="text"
          placeholder=" Search Twitter"
        />
      </div>
    </>
  );
}
