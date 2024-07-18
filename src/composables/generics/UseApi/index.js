import { api, apiBase } from "boot/axios";

const switchApi = (codeApi) => {
  switch (codeApi) {
    case 0:
      return api;
    case 1:
      return apiBase;

    default:
      apiBase;
  }
};

export default function useApi(url, codeApi = 1) {
  const source = switchApi(codeApi);
  const list = async () => {
    try {
      const { data } = await source.get(url);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const post = async (payload) => {
    try {
      const { data } = await source.post(url, payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const update = async (uid, payload) => {
    try {
      const { data } = await source.put(`${url}/${uid}`, payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const patch = async (uid, payload) => {
    try {
      const { data } = await source.patch(`${url}/${uid}`, payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const remove = async (payload) => {
    try {
      const { data } = await source.delete(`${url}/${payload.uid}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return { list, post, update, patch, remove };
}
