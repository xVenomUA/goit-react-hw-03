import { useId } from "react";
import css from "./SearchBar.module.css";
export const SearchBar = ({ value, onChange }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}></label>
      <input type="text" value={value} id={id} className={css.input} onChange={onChange} />
    </>
  );
};
