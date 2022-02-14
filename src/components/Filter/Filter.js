import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/phonebook/selectors';
import { filterChangeAction } from '../../redux/phonebook/actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = event =>
    dispatch(filterChangeAction(event.target.value));

  return (
    <div>
      <h2 className={s.filterTitle}>Find contacts by name</h2>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}
