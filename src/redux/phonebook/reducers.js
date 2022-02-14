import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  filterChangeAction,
  deleteContactAction,
  addContactAction,
} from './actions';

const items = createReducer([], {
  [addContactAction]: (state, { payload }) => [payload, ...state],
  [deleteContactAction]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterChangeAction]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
