import { Component } from 'react';
// import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../ApiRequest/ApiRequest';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
  };

  // работа с запросом
  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    )
      console.log('qwe');
  }

  // добавляет страницу в стейт
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  // async componentDidMount() {
  //   try {
  //     const response = await axios.get('/images');
  //     this.setState({ images: response.data });
  //   } catch (error) {}
  // }

  hanleSubmit = event => {
    event.preventDefault();
    this.setState({
      page: 1,
      query: event.target.elements.query.value,
      images: [],
    });
    event.target.reset();
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.hanleSubmit} />
        <ImageGallery />
        <Button onClick={this.loadMore} />
      </>
    );
  }
}
