import React from 'react';
// import shortid from 'shortid';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from '../redux/store';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';

export default function App() {
  // const value = useSelector(state => state.myValue);
  // const dispatch = useDispatch();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        fontFamily: 'Roboto',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
