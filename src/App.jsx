import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
