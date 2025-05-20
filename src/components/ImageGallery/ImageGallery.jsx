import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
const ImageGallery = ({ images, openModal, lastImageRef }) => {
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
