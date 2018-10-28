import axios from 'axios';
// import { DEFAULT_API_URL } from '../constants/index';


const fetchData = (url) => {
  // const mockDataUrl = `http://localhost:8080/dist/utils/data/${url}.json`;
  const mockDataUrl = `http://egor-sorokin.github.io/website/dist/${url}.json`;

  return axios.get(mockDataUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }

      throw new Error('Something went wrong ...');
    })
};


export default fetchData;
