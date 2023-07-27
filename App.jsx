import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";


  export default function ContactList({ setSelectedContactId }) {
    // ....your component logic
}
 
  const [selectedContactId, setSelectedContactId] = useState(null);
 
 
  return (
    <>
    ContactList setSelectedContactId={setSelectedContactId} 
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
  export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
