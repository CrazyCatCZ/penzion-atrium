"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

const ImageGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const documentRef = useRef(typeof document !== "undefined" ? document : null);

  const prevSlide = useCallback(() => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages]);

  const nextSlide = useCallback(() => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  }, [galleryImages]);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "d" || event.key === "ArrowRight") {
        nextSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    if (documentRef.current) {
      documentRef.current.addEventListener("keydown", handleKeyDown);

      return () => {
        documentRef.current.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  return (
    <div>
      {openModal && (
        <ImageModal
          galleryImages={galleryImages}
          handleCloseModal={handleCloseModal}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          slideNumber={slideNumber}
        />
      )}

      <div className="flex flex-wrap gap-2.5  items-center sm:justify-start  justify-center max-w-full mx-auto">
        {galleryImages &&
          galleryImages.map((slide, index) => (
            <div
              className="sm:w-[265px] cursor-pointer"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <Image
                height={310}
                width={573}
                src={slide.src}
                alt={slide.alt}
                className="w-[573px] h-[310px] object-cover  transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
