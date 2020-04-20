import Axios from 'axios';
import Defines from '@lib/Defines';
import {BOOKS} from '@ts/types';

const API = Axios.create({
  baseURL: Defines.API.HOST,
});

export const getBooks = async (query: string) => {
  return await API.get<BOOKS>(`${Defines.API.BOOKS}?q=${query}`).then(
    (res) => res.data,
  );
};

export default API;
