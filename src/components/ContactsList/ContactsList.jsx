import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectItems, selectIsLoading } from 'redux/selectors';
import { List, ListDelBtn, ListItem } from './ContactsList.styled';
import { deleteContact } from 'redux/operations';

const ContactsList = () => {
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

    const filteredContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    return (
    <List>
      {filteredContacts.map(({ id , name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <ListDelBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete{isLoading && <Loader />}
          </ListDelBtn>
        </ListItem>
      ))}
        </List>
  );
};
export default ContactsList;