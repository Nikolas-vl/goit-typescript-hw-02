import { GridLoader } from 'react-spinners';
import s from './Loader.module.css';
const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <GridLoader color='#25c28b' />
    </div>
  );
};

export default Loader;
