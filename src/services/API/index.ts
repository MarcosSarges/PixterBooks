import Axios from 'axios';
import Defines from '@services/Defines';
import {BOOKS} from 'src/ts/types';

const API = Axios.create({
  baseURL: Defines.API.HOST,
});

export const getBooks = async (query: string) => {
  return await API.get<BOOKS>(`${Defines.API.BOOKS}?q=${query}`);
};

export default API;
