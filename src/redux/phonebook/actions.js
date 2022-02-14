import { createAction } from '@reduxjs/toolkit';

// export const deleteContactAction = createAction('phonebook/deleteContact');

// export const addContactAction = createAction('phonebook/addContact', (name, phone) => {
//   return {
//     payload: {
//       name,
//       phone,
//     },
//   };
// });

export const filterChangeAction = createAction('phonebook/filterChange');

export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');

export const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');

export const fetchContactsError = createAction('phonebook/fetchContactsError');

export const deleteContactsRequest = createAction('phonebook/deleteContactsRequest');

export const deleteContactsSuccess = createAction('phonebook/deleteContactsSuccess');

export const deleteContactsError = createAction('phonebook/deleteContactsErrodelete');

export const addContactsRequest = createAction('phonebook/addContactsRequest');

export const addContactsSuccess = createAction('phonebook/addContactsSuccess');

export const addContactsError = createAction('phonebook/addContactsErrodelete');
