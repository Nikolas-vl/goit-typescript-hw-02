import ImageCard from '../ImageCard/ImageCard.tsx';
import s from './ImageGallery.module.css';
import type { FC, RefObject } from 'react';
import type { Image } from '../../types/types.ts';

type ImageGalleryProps = {
  images: Image[];
  handleOpenModal: (image: Image) => void;
  lastImageRef: RefObject<HTMLLIElement | null>;
};

const ImageGallery: FC<ImageGalleryProps> = ({ images, handleOpenModal, lastImageRef }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image, index) => (
          <li className={s.item} key={image.id} onClick={() => handleOpenModal(image)} ref={index === images.length - 1 ? lastImageRef : null}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
