import { createAction } from '@reduxjs/toolkit';

export const filterChangeAction = createAction('phonebook/filterChange');

export const addContactsRequest = createAction('phonebook/addContactsRequest');

export const addContactsSuccess = createAction('phonebook/addContactsSuccess');

export const addContactsError = createAction('phonebook/addContactsErrodelete');
