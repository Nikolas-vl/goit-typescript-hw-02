import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState, useRef } from 'react';
import { fetchData } from '../../api';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import type { Image } from '../../types/types';
import type { FC } from 'react';

const App: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lastImageRef = useRef<HTMLLIElement | null>(null);

  const handleSearch = (newQuery: string): void => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async (): Promise<void> => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchData(query, page);

        setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));

        setTotalPages(data.total_pages);
      } catch {
        setError('Sorry, something went wrong :(');
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const loadMore = (): void => {
    setPage(prev => prev + 1);
  };

  const handleOpenModal = (image: Image): void => {
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (page > 1 && lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [images]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} handleOpenModal={handleOpenModal} lastImageRef={lastImageRef} />
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal isModalOpen={isModalOpen} closeModal={closeModal} image={selectedImage} />
    </div>
  );
};

export default App;
