import ImageGallery from "./ImageGallery";

const GallerySection = ({ title, images }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <div className="flex flex-wrap gap-4">
      <ImageGallery galleryImages={images} />
    </div>
  </div>
);

export default GallerySection;
