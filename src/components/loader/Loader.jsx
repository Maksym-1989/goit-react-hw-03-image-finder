import React, { Component } from "react";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loadder = () => {
  return (
    <div className='loaderContainer'>
    <Loader
      type="Oval"
      color="#242288"
      height={30}
      width={30}
      timeout={1000}
    />
    </div>

  );
}

export default Loadder;