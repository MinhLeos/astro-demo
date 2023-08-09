import { atom, deepMap, onMount } from 'nanostores';
import axios from 'axios';

export const isOpen = atom(false);
export const isOpenVue = atom(false);
export const isOpenSvelte = atom(true);

export interface User {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

export const listUsers = deepMap<{ datas: User[] }>({ datas: [] });

onMount(listUsers, () => {
  const getData = async () => {
    const res = await axios({
      method: 'get',
      url: 'https://64d1e94bf8d60b174361173e.mockapi.io/api/v1/users',
    });
    if (res.data?.length > 0) {
      listUsers.setKey('datas', res.data);
    }
  };
  getData();
})