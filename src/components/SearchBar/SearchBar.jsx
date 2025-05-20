import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.search.value.trim();

    if (value === '') {
      return toast.error('Search bar is empty!!!');
    }

    onSubmit(value);
    form.reset();
  };

  return (
    <header className={s.searchBar}>
      <Toaster position='top-right' />
      <form className={s.form} onSubmit={handleSubmit}>
        <input className={s.input} type='text' autoComplete='off' autoFocus placeholder='Search images and photos' name='search' />
        <button className={s.btn} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
