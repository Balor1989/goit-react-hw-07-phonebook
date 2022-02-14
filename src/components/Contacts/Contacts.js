import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { fetchContacts } from '../../redux/phonebook/selectors';
import { deleteContactAction } from '../../redux/phonebook/actions';
import { useEffect } from 'react';

export default function Contacts() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();
  const onDeleteContactCard = id => {
    dispatch(deleteContactAction(id));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.cardList}>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.cardBox} key={id}>
          <p className={s.cardValues}>
            {name}: {phone}
          </p>
          <div className={s.buttonBox}>
            <button className={s.deleteButton} onClick={() => onDeleteContactCard(id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
