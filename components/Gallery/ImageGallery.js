"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./image-gallery.css";

const ImageGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const documentRef = useRef(typeof document !== "undefined" ? document : null);

  // Previous Image
  const prevSlide = useCallback(() => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages]);

  // Next Image
  const nextSlide = useCallback(() => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  }, [galleryImages]);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleKeyDown = useCallback(
    (event) => {
      const isPreviousSlide = event.key === "a" || event.key === "ArrowLeft";
      const isNextSlide = event.key === "d" || event.key === "ArrowRight";

      if (event.key === "Escape") {
        handleCloseModal();
      } else if (isPreviousSlide) {
        prevSlide();
      } else if (isNextSlide) {
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
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <Image
              className="modalImage"
              src={galleryImages[slideNumber].src}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => (
            <div
              className="single"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <Image src={slide.src} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
