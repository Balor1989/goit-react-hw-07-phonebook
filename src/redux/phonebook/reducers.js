import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  deleteContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
} from './actions';

// const items = createReducer([], {
//   [addContactAction]: (state, { payload }) => [payload, ...state],
// });

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
  [deleteContactsError]: (_, action) => action.payload,
  [deleteContactsRequest]: () => null,
});

export default combineReducers({
  contacts,
  isLoading,
  error,
  filter,
});
