import Modal from 'react-modal';
import type { FC } from 'react';
import type { Image } from '../../types/types';

Modal.setAppElement('#root');

type ImageModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  image: Image | null;
};

const ImageModal: FC<ImageModalProps> = ({ isModalOpen, closeModal, image }) => {
  if (!image) {
    return null;
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel='Image Modal'
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          maxWidth: '800px',
          margin: 'auto',
          padding: '0',
          border: 'none',
          background: 'transparent',
        },
      }}
    >
      <div onClick={closeModal} style={{ cursor: 'pointer' }}>
        <img src={image.urls.regular} alt={image.alt_description || 'Image'} style={{ width: '100%', borderRadius: '8px' }} />
        <p style={{ color: 'white', textAlign: 'center' }}>
          by {image.user.name} | likes: {image.likes}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
