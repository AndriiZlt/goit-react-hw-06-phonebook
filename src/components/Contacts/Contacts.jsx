import shortid from 'shortid';
import { Ul, Li, Btn } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/store';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return contacts.length > 0 ? (
    filteredContacts.length > 0 ? (
      <Ul>
        {filteredContacts.map(({ name, number }) => (
          <Li key={shortid.generate()}>
            {name} {number}
            {
              <Btn
                type="button"
                id={name}
                onClick={() => dispatch(removeContact(name))}
              >
                Delete
              </Btn>
            }
          </Li>
        ))}
      </Ul>
    ) : (
      <>No matches</>
    )
  ) : (
    <>
      <p>Add some contacts</p>
    </>
  );
};

export default ContactList;
