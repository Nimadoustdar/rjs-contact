const ContactItem = ({ contacts, deleteHandler,editHandler }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>
            <span>Name:</span>
            {contact.name}
          </p>
          <p>
            <span>Last Name:</span>
            {contact.lastName}
          </p>
          <p>
            <span>Email:</span>
            {contact.email}
          </p>
          <p>
            <span>Phone:</span>
            {contact.phone}
          </p>
          <button onClick={() => deleteHandler(contact.id)}>Delete </button>
          <button onClick={() => editHandler(contact.id)}>Edit </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactItem;
