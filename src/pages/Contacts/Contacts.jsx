import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter';
import { Container } from './Contacs.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';
import { selectIsLoading, selectError } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
      return (<Container>
        {/* <AppBar /> */}
      <h1>Phonebook</h1>
      <ContactForm  /> 
      <h2>Contacts</h2>
        <Filter />
      {isLoading && !error && <Loader />}
        <ContactsList />
    </Container>
    )
}
export default Contacts;