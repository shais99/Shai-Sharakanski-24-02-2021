import axios from "axios";

const httpService = {
  get(endpoint, parameters) {
    return ajax(endpoint, axios.get, parameters);
  },
};

export default httpService;

async function ajax(endpoint, axiosFn, parameters = "") {
  const API_KEY = "i2EVqwXjJeWy35mBog3zPw6KWWHwraTH";

  try {
    const res = await axiosFn(`${endpoint}?apikey=${API_KEY}${parameters}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
