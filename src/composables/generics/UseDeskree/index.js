import { apiDeskee } from "boot/axios";
import { clientDeskree } from "src/boot/deskree-client";

const switchApi = (codeApi) => {
  switch (codeApi) {
    case 0:
      return clientDeskree;
    case 1:
      return adminDeskree;
    case 2:
      return apiDeskee;

    default:
      clientDeskree;
  }
};

export default function useApi(url, codeApi = 0) {
  const source = switchApi(codeApi);
  const list = async (filters = {}) => {
    try {
      const { data } =
        codeApi !== 2
          ? await source.database().from(url).get(filters)
          : await source.get(url);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const getOne = async (uid) => {
    try {
      const { data } =
        codeApi !== 2
          ? await source.database().from(url).getByUID(uid)
          : await source.get(url);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const post = async (payload) => {
    try {
      const { data } =
        codeApi !== 2
          ? await source.database().from(url).create(payload)
          : await source.post(url, payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  const update = async (uid, payload, config = {}) => {
    try {
      const { data } =
        codeApi !== 2
          ? await source.database().from(url).update(uid, payload, config)
          : await source.put(`${url}/${uid}`, payload);
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
      const { data } =
        codeApi !== 2
          ? await source.database().from(url).delete(payload.uid)
          : await source.delete(`${url}/${payload.uid}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return { list, post, update, patch, remove, getOne };
}
