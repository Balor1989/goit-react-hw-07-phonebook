import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const filterChangeAction = createAction('phonebook/filterChange');

export const deleteContactAction = createAction('phonebook/deleteContact');

export const addContactAction = createAction('phonebook/addContact', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');

export const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');

export const fetchContactsError = createAction('phonebook/fetchContactsError');
