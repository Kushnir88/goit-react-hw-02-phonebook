import React, { useState } from 'react';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
