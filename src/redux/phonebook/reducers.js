import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
} from './actions';
import { fetchContacts, deleteContacts } from './selectors';

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [addContactsSuccess]: (state, { payload }) => [payload, ...state],
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.pending]: () => null,
  [addContactsError]: (_, { payload }) => payload,
  [addContactsRequest]: () => null,
});

export default combineReducers({
  contacts,
  error,
  filter,
  isLoading,
});
