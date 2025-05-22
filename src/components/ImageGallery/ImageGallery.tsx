import ImageCard from '../ImageCard/ImageCard.js';
import s from './ImageGallery.module.css';
import type { FC, RefObject } from 'react';
import type { Image } from '../../types/types';

type ImageGalleryProps = {
  images: Image[];
  openModal: (image: Image) => void;
  lastImageRef: RefObject<HTMLLIElement>;
};

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal, lastImageRef }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image, index) => (
          <li className={s.item} key={image.id} onClick={() => openModal(image)} ref={index === images.length - 1 ? lastImageRef : null}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
