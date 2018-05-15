import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAbV8z0-hPOfiP2lNd_D4F2zURyrP3gEYs';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
    maxResults: 15,
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default youtubeSearch;
