import React, { Component } from "react";
import ImageGallery from "../imageGallery/ImageGallery";
import Searchbar from "../searchbar/Searchbar";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import axios from "axios";
class App extends Component {
  state = {
    gallery: [],
    pageNamber: 1,
    perPage: 12,

    searchQuery: "",
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  fetchImg = () => {
    const { searchQuery, pageNamber, perPage } = this.state;
    const apiKey = "21708715-c005b8eff9b2107cefe751bb8";
    this.setState({ isLoading: true });
    if (!searchQuery) {
      return;
    }


    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${pageNamber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...response.data.hits],
          pageNamber: prevState.pageNamber + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  changeQuery = (query) => {
    this.setState({
      searchQuery: query,
      pageNamber: 1,
      gallery: [],
    });
  };

  render() {
    const { searchQuery, isLoading, gallery } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery gallery={gallery} />
        {isLoading && <Loader />}
        {searchQuery && (
          <Button onClick={this.fetchImg} BtnName='Load more'>
            <Loader />
          </Button>
        )}
      </div>
    );
  }
}

export default App;
