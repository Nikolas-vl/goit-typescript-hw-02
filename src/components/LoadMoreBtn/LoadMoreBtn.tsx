import s from './LoadMoreBtn.module.css';
import type { FC } from 'react';

type LoadMoreBtnProps = {
  loadMore: () => void;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div className={s.btnContainer}>
      <button className={s.btn} onClick={loadMore} type='button'>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
