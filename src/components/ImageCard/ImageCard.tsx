import s from './ImageCard.module.css';
import type { FC } from 'react';
import type { Image } from '../../types/types';

type ImageCardProps = {
  image: Image;
};

const ImageCard: FC<ImageCardProps> = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={s.card}>
      <img src={urls.small} alt={alt_description || 'image'} />
    </div>
  );
};

export default ImageCard;
