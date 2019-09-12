import { deleteMethod, getMethod, postMethod, putMethod } from '../utils/request';

export async function getUsers() {
  return getMethod({ url: '/users' });
}

export async function getUser(params) {
  return getMethod({ url: '/user', params });
}

export async function editUser(data) {
  return postMethod({ url: `/user/${data.id}`, data });
}
export async function addUser(data) {
  return putMethod({ url: `/user`, data });
}
export async function deleteUser(data) {
  return deleteMethod({ url: `/user/${data.id}`, data });
}

export async function getWrongUser(params) {
  return getMethod({ url: '/wrong/user', params });
}
