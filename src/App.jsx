import { useState } from "react";
import { ContactList } from "./components/ContactList/ContactList";
import dataContact from "../data.json";
import { SearchBar } from "./components/SearchBar/SearchBar";

export const App = () => {
  const [value, setValue] = useState("");
  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const getListContacts = () => {
    const list = dataContact.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    return list;
  };
  const arrayContacts = getListContacts();
  return (
    <>
      <SearchBar value={value} onChange={inputValue} />
      <ContactList dataContact={arrayContacts}/>
    </>
  );
};
