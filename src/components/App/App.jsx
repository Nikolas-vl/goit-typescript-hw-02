// import SearchBar from '../SearchBar/SearchBar';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import Loader from '../Loader/Loader';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import { useEffect, useState, useRef } from 'react';
// import { fetchData } from '../../api';
// import ImageModal from '../ImageModal/ImageModal';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// const App = () => {
//   const [images, setImages] = useState([]);
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);
//   const [totalPages, setTotalPages] = useState(0);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const lastImageRef = useRef(null);

//   const handleSearch = newQuery => {
//     if (newQuery === query) {
//       return;
//     }
//     setQuery(newQuery);
//     setImages([]);
//     setPage(1);
//   };

//   useEffect(() => {
//     if (!query) {
//       return;
//     }

//     const getImages = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);

//         const data = await fetchData(query, page);

//         setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));

//         setTotalPages(data.total_pages);
//       } catch (error) {
//         setError('Sorry, something went wrong :(');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getImages();
//   }, [query, page]);

//   const loadMore = () => {
//     setPage(prev => prev + 1);
//   };

//   const openModal = image => {
//     setModalIsOpen(true);
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedImage(null);
//   };

//   useEffect(() => {
//     if (page > 1 && lastImageRef.current) {
//       lastImageRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [images]);

//   return (
//     <div>
//       <SearchBar onSubmit={handleSearch} />
//       {error && <ErrorMessage message={error} />}
//       <ImageGallery images={images} openModal={openModal} lastImageRef={lastImageRef} />
//       {isLoading && <Loader />}
//       {images.length > 0 && page < totalPages && <LoadMoreBtn loadMore={loadMore} />}
//       <ImageModal openModal={modalIsOpen} closeModal={closeModal} image={selectedImage} />
//     </div>
//   );
// };

// export default App;
