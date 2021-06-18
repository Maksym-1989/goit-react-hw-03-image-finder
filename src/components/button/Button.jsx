import React from "react";

import PropTypes from "prop-types";

const Button = ({ BtnName, onClick, children }) => {
  return (
    <div className='BtnContainer'>
    <button type="button" className="Button" onClick={onClick}>
      {BtnName}
      {children}
    </button>
    </div>
  );
};

Button.propTypes = {
  BtnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
