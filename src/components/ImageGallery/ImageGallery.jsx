import styles from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={styles.imageGallery}>
      <ImageGalleryItem />;
    </ul>
  );
};

export default ImageGallery;
