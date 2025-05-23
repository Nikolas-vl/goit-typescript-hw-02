import { GridLoader } from 'react-spinners';
import s from './Loader.module.css';
import type { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className={s.loaderContainer}>
      <GridLoader color='#25c28b' />
    </div>
  );
};

export default Loader;
