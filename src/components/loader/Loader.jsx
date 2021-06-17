import React, { Component } from "react";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  render() {
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
}
