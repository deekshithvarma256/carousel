import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

const Modal = ({ modalOpen, onClose }) => {
  const { isOpen, item } = modalOpen;
  const [modalSlide, setModalSlide] = useState(isOpen);
  const handleClose = () => {
    setModalSlide(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        modalSlide ? "animate-slide-in-bottom" : "animate-slide-out-bottom"
      }
      `}
    >
      <div
        className="absolute inset-0 bg-gray-950 opacity-75"
        onClick={handleClose}
      ></div>
      <div
        className={`bg-black relative rounded-lg sm:flex h-fit max-h-[90vh] overflow-auto shadow-xl duration-1000 w-[70vw] opacity-80
        `}
      >
        <div
          className="absolute right-0 m-6 z-10 cursor-pointer"
          onClick={handleClose}
        >
          &#10060;
        </div>
        <div className="w-1/4 min-w-[150px] mt-2 ml-4 sm:m-auto">
            <ImageComponent item={item} />
        </div>
        <div className="text-sm m-4 text-white sm:flex-1">
          <div className="sm:text-lg font-bold ">{item.title}</div>
          <span>
            <span>{item.release_date}</span>
            <span className="m-4">{"|"}</span>
            <span>{item.vote_average}&nbsp;&#11088;</span>
          </span>
          <div className="my-2">
            {item.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
