import axios from 'axios';
import {
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
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
    const response = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
