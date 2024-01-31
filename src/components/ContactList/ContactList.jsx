
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"

export const ContactList = ({ dataContact, deleteContact }) => {
  return (
    <ul className={css.list}>
      {dataContact.map((data) => {
        return (
          <Contact
            key={data.id}
            dataContact={data}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};