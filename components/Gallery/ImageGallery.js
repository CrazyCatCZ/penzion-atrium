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
  const documentRef = useRef(document);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Previous Image
  const prevSlide = useCallback(() => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  }, [slideNumber, galleryImages]);

  // Next Image
  const nextSlide = useCallback(() => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }, [slideNumber, galleryImages]);

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
    documentRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      documentRef.current.removeEventListener("keydown", handleKeyDown);
    };
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
            <Image src={galleryImages[slideNumber].src} alt="" />
          </div>
        </div>
      )}

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <Image src={slide.src} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageGallery;
