import { toast, Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';
import type { FC, FormEvent } from 'react';

type Props = {
  onSubmit: (value: string) => void;
};

const SearchBar: FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    const value = input.value.trim();

    if (value === '') {
      toast.error('Search bar is empty!!!');
      return;
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
