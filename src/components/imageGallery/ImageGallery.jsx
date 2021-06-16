import React, { Component } from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import Modal from "../modal/Modal";

class ImageGallery extends Component {
  state = {
    showModal: false, // для Модального окна
    largeSrc: "",
    imgAlt: "",
  };
  // Методы
  // работа Модального окна. Открытие-закрытие в зависимости от предыдущего значения
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // открытие модального окна при клике на изображение
  onImgClick = (largeSrc, imgAlt) => {
    // console.log(largeSrc);
    // console.log(imgAlt);

    this.toggleModal();

    this.setState({ largeSrc, imgAlt });
  };
  render() {
    const { showModal, largeSrc, imgAlt } = this.state;

    const { gallery } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              imgSrc={webformatURL}
              imgAlt={tags}
              largeSrc={largeImageURL}
              onImgClick={this.onImgClick}
            />
          ))}
        </ul>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeSrc} alt={imgAlt} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
