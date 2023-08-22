import Image from "next/image";
import { useRef, useState } from "react";
import arrow from "../public/arrow.svg";
import Card from "./Card";
import Modal from "./Modal";

const Carousel = ({ items }) => {
  const [modalOpen, setModalOpen] = useState({ isOpen: false, item: {} });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(null);
  const carouselRef = useRef(null);
  const slideCount = { lg: 5, md: 3, sm: 1 };
  const screenSize = () => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width >= 992) {
      return "lg";
    } else if (width >= 768) {
      return "md";
    } else {
      return "sm";
    }
  };
  const totalSlides = Math.ceil(items.length / slideCount[screenSize()]);
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    if (diff > 5) {
      handlePrevSlide();
    } else if (diff < -5) {
      handleNextSlide();
    }
    setStartX(null);
  };

  const handleCardClick = (item) => {
    setModalOpen({ isOpen: true, item: item });
  };

  const handleModalClose = () => {
    setTimeout(() => {
      setModalOpen({ isOpen: false, item: {} });
    }, 400);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((currentSlide) => currentSlide - 1);
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextSlide = () => {
    if (currentSlide === totalSlides - 1) return;
    setCurrentSlide(currentSlide + 1);
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(null)}
    >
      <div className="flex overflow-hidden m-5" ref={carouselRef}>
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div
        className="absolute top-0 left-0 bg-black bg-opacity-50 p-0 mx-2 w-[30px] h-full"
        onClick={handlePrevSlide}
      >
        <Image
          src={arrow}
          alt={"prev icon"}
          width={30}
          height={30}
          className="absolute top-1/2 transform rotate-180 -translate-y-1/2 animate-pulse"
        />
      </div>
      <div
        className="absolute top-0 right-0 bg-black bg-opacity-50 p-0 mx-2 w-[30px] h-full"
        onClick={handleNextSlide}
      >
        <Image
          src={arrow}
          alt={"next icon"}
          width={30}
          height={30}
          className="absolute top-1/2 transform -translate-y-1/2 animate-pulse"
        />
      </div>
      {modalOpen.isOpen && (
        <Modal
          modalOpen={modalOpen}
          onClose={handleModalClose}
          handleCardClick={() => {}}
        />
      )}
    </div>
  );
};

export default Carousel;
