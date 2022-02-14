import s from './App.module.css';
import Contacts from './components/Contacts/Contacts';
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter';

const App = () => {
  return (
    <section className={s.phonebookSection}>
      <Phonebook />
      <Filter />
      <Contacts />
    </section>
  );
};
export default App;
