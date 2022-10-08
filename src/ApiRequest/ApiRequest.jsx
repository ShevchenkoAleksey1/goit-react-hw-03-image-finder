import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

const fetchImages = async (query, page) => {
  const { data } = await axios.get(``);
};
// async componentDidMount() {
//   try {
//     const response = await axios.get('/images');
//     this.setState({ images: response.data });
//   } catch (error) {}
// }
