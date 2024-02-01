import { useEffect, useState } from "react";
import { ContactList } from "./components/ContactList/ContactList";
import dataContact from "../data.json";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ConctactForm } from "./components/ContactForm/ContactForm";


export const App = () => {
  const [filterValue, setFilterValue] = useState("");

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataContacts")) ?? dataContact
  );

  useEffect(() => {
    localStorage.setItem("dataContacts", JSON.stringify(data));
  }, [data]);

  const setInputValue = (e) => {
    setFilterValue(e.target.value);
  };

  const listSearchContacts = data.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  ).sort((a,b) => a.name.localeCompare(b.name));

  const handleAddContact = (newContact) => {
    setData((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setData((prevContacts) =>
      prevContacts.filter((item) => item.id !== id)
    );
  };
  
  return (
    <>
      <h1 >Phonebook</h1>
      <ConctactForm
        handleAddContact={handleAddContact}
      />
      <SearchBar value={filterValue} onChange={setInputValue} />
      <ContactList
        dataContact={listSearchContacts}
        deleteContact={deleteContact}
      />
    </>
  );
};
