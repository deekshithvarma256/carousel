import { useState } from "react";
import Card from "./Card";
import arrow from "../arrow.png";
import Image from "next/image";
import Modal from "./Modal";

const Carousel = ({ items: arr }) => {
  const [modalOpen, setModalOpen] = useState({ isOpen: false, item: {} });
  const [items, setItems] = useState(arr);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = {
    lg: 5,
    md: 3,
    sm: 1,
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
    setCurrentSlide(currentSlide - slideCount[screenSize()]);
    const shiftedItems = items
      .slice(-slideCount[screenSize()])
      .concat(items.slice(0, -slideCount[screenSize()]));
    setItems(shiftedItems);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + slideCount[screenSize()]);
    const shiftedItems = items
      .slice(slideCount[screenSize()])
      .concat(items.slice(0, slideCount[screenSize()]));
    setItems(shiftedItems);
  };

  const screenSize = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      return "lg";
    } else if (width >= 768) {
      return "md";
    } else {
      return "sm";
    }
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden m-5">
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
        className="absolute top-0 left-2 bg-black bg-opacity-50 p-2 mx-2 w-[40px] h-full"
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
        className="absolute top-0 right-2 bg-black bg-opacity-50 p-2 mx-2 w-[40px] h-full"
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
