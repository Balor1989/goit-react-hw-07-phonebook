import axios from 'axios';
import {
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactsRequest,
  deleteContactsError,
  deleteContactsSuccess,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
} from './actions';

axios.defaults.baseURL = 'https://620a3f5092946600171c58f2.mockapi.io/v1_0';

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const deleteContacts = contactId => async dispatch => {
  dispatch(deleteContactsRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

export const addContacts = (name, phone) => async dispatch => {
  dispatch(addContactsRequest());
  const contact = { name, phone };
  try {
    const { data } = await axios.post('/contacts/', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};
