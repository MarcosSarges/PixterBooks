import Axios from 'axios';
import Defines from '@services/Defines';

const API = Axios.create({
  baseURL: Defines.API.HOST,
});

export const getBooks = async (query: string) => {
  return await API.get(`${Defines.API.BOOKS}?q=${query}`);
};

export default API;
