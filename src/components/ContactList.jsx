import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteHandler,editHandler }) => {
  return (
    <div>
      {contacts.length ? (
        <ContactItem contacts={contacts} editHandler={editHandler} deleteHandler={deleteHandler} />
      ) : (
        <p>No Contact Yet!</p>
      )}
    </div>
  );
};

export default ContactList;
