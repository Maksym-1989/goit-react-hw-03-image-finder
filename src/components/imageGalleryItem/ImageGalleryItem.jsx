import React from "react";
const ImageGalleryItem = ({ imgSrc, imgAlt, largeSrc, onImgClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="ImageGalleryItem-image"
        onClick={() => {
          onImgClick(largeSrc, imgAlt);
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;
