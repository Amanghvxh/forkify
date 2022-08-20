import { API_URL } from './config.js';
import { TIME_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const fetchApi = async function (id) {
  try {
    const res = await Promise.race([
      fetch(`${API_URL}${id}`),
      timeout(TIME_SEC),
    ]);
    const resData = await res.json();
    if (!res.ok) throw new Error(`${resData.status} ${resData.message}`);
    const { recipe } = resData.data;
    return recipe;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
