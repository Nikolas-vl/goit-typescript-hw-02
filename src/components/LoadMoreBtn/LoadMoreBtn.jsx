import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={s.btnContainer}>
      <button className={s.btn} onClick={loadMore} type='button'>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
