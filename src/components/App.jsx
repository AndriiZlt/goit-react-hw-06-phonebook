import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';

export default function App() {
  return (
    <div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 20,
          color: '#010101',
          fontFamily: 'Roboto',
        }}
      >
        <div style={{ marginRight: 50 }}>
          <ContactForm />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ margin: 0, fontSize: 18 }}>Contacts:</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
