import axios from 'axios';
// import { DEFAULT_API_URL } from '../constants/index';
import {API_DELAY} from '../constants/index';


const timeout = (ms, promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve, reject)
    }, ms);
  })
};


const fetchData = (url) => {
  // const mockDataUrl = `http://localhost:8080/src/utils/data/${url}.json`;
  const mockDataUrl = `https://egor-sorokin.github.io/website/data/${url}.json`;

  return timeout(API_DELAY, axios.get(mockDataUrl))
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }

      throw new Error('Something went wrong ...');
    })
};


export default fetchData;
