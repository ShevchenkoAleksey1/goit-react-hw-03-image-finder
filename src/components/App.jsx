import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
  };
  async componentDidMount() {
    try {
      const response = await axios.get('/images');
      this.setState({ images: response.data });
    } catch (error) {}
  }

  render() {
    return (
      <>
        <Searchbar />;
        <ImageGallery />;
        <Button />;
      </>
    );
  }
}
