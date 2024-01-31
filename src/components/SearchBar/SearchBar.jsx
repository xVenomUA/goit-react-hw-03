import { useId } from "react";
import css from "./SearchBar.module.css";
export const SearchBar = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contact by name</label>
      <input type="text" value={value} id={id} className={css.input} onChange={onChange} placeholder="Search" />
    </div>
  );
};
