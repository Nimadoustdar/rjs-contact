import { useState } from "react";
import styles from "./Contacts.module.css";
import ContactList from "./ContactList";
import inputs from "../constants/input";
import { v4 } from "uuid";
const Contacts = () => {
  const [alert, setAlert] = useState(false);
  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const newContactWithId = { ...contact, id: v4() };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert(true);
      return;
    }
    setAlert(false);
    setContacts((contacts) => [...contacts, newContactWithId]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact);
  };
  const editHandler = (e, id) => {
    console.log(id);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={contact[input.name]}
          onChange={changeHandler}
        />
      ))}

      <button onClick={addHandler}>Add contact</button>
      <p>{alert && "please fill all token "}</p>
      <ContactList
        contacts={contacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
};

export default Contacts;
