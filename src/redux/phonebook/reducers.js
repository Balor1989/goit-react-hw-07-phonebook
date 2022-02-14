import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  deleteContactsRequest,
  deleteContactsError,
  deleteContactsSuccess,
} from './actions';
import { fetchContacts } from './selectors';

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [deleteContactsSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [addContactsSuccess]: (state, { payload }) => [payload, ...state],
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [deleteContactsError]: (_, { payload }) => payload,
  [deleteContactsRequest]: () => null,
  [addContactsError]: (_, { payload }) => payload,
  [addContactsRequest]: () => null,
});

export default combineReducers({
  contacts,
  error,
  filter,
  isLoading,
});
