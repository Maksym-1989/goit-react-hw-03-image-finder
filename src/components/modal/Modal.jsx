import React, { Component } from "react";

import PropTypes from "prop-types";

import { createPortal } from "react-dom";

import css from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  onOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.onOverlayClick}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      document.querySelector("#modal-root")
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
