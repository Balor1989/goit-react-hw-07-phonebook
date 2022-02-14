import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  deleteContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
} from './actions';

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addContactsSuccess]: (state, { payload }) => [payload, ...state],
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
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
