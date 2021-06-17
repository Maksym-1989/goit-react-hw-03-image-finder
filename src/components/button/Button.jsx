import React from "react";

import PropTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <div className='BtnContainer'>
    <button type="button" className="Button" onClick={onClick}>
      Load more
      {children}
    </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
