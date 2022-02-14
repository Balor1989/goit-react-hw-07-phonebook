import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  deleteContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
} from './actions';
import { fetchContacts } from './selectors';

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
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
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.fulfilled]: () => null,
  [deleteContactsError]: (_, action) => action.payload,
  [deleteContactsRequest]: () => null,
  [addContactsError]: (_, action) => action.payload,
  [addContactsRequest]: () => null,
});

export default combineReducers({
  contacts,
  isLoading,
  error,
  filter,
});
