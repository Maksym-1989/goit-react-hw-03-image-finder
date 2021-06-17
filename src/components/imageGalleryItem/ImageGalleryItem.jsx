import React from "react";
import PropTypes from "prop-types";
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
ImageGalleryItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  largeSrc: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
