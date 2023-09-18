import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/steephanie/f5cb92f489391521bbc4d4e3e4d64881/raw/4504a9b39314bb7a5c484a9f3792574d27a8ffd2'
});
export default api;
