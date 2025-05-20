import s from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={s.card}>
      <img src={urls.small} alt={alt_description || 'image'} />
    </div>
  );
};

export default ImageCard;
