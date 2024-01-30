
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"

export const ContactList = ({ dataContact }) => {    
    return (
      <ul className={css.list}>
        {
          <ul className={css.list}>
            {dataContact.map(({ id, name, number }) => {
              return <Contact key={id} name={name} number={number} />;
            })}
          </ul>
        }
      </ul>
    );
}