import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  deleteContactAction,
  addContactAction,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
} from './actions';

const items = createReducer([], {
  [addContactAction]: (state, { payload }) => [payload, ...state],
  [deleteContactAction]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
});

export default combineReducers({
  contacts,
  isLoading,
  error,
  items,
  filter,
});
