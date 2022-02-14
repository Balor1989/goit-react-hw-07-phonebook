import { createAction } from '@reduxjs/toolkit';

export const filterChangeAction = createAction('phonebook/filterChange');

// // export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');

// // export const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');

// // export const fetchContactsError = createAction('phonebook/fetchContactsError');

export const deleteContactsRequest = createAction('phonebook/deleteContactsRequest');

export const deleteContactsSuccess = createAction('phonebook/deleteContactsSuccess');

export const deleteContactsError = createAction('phonebook/deleteContactsError');

export const addContactsRequest = createAction('phonebook/addContactsRequest');

export const addContactsSuccess = createAction('phonebook/addContactsSuccess');

export const addContactsError = createAction('phonebook/addContactsErrodelete');
