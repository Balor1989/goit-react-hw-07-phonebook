import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import s from './Phonebook.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/phonebook/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContactAction } from '../../redux/phonebook/actions';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    const repeatName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (!repeatName) {
      Notify.success(`${name} is added in contacts`);
      dispatch(addContactAction(name, number));
      setNumber('');
      setName('');
      return;
    }
    Notify.warning(`${name} is already in contacts`);
  };

  return (
    <>
      <h2 className={s.phonebookTitle}>
        Phonebook
        <IconContext.Provider
          value={{
            color: 'rgb(198, 131, 204)',
            size: '25px',
            style: { margin: '0 0 0 15px' },
          }}
        >
          <BsFillTelephonePlusFill />
        </IconContext.Provider>
      </h2>
      <form className={s.phonebookForm} onSubmit={formSubmit}>
        <div className={s.inputBox}>
          {' '}
          <label className={s.label}>Name</label>
          <input
            className={s.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </div>
        <div className={s.inputBox}>
          <label className={s.label}>Number</label>
          <input
            className={s.input}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </div>
        <div className={s.buttonBox}>
          <button className={s.deleteButton} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </>
  );
}
