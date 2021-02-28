import axios from "axios";

const httpService = {
  get(endpoint, parameters) {
    return ajax(endpoint, axios.get, parameters);
  },
};

export default httpService;

async function ajax(endpoint, axiosFn, parameters = "") {
  const API_KEY = "ztoG057zrGQbIReUPJMcURHmT1ukYv22";

  try {
    const res = await axiosFn(`${endpoint}?apikey=${API_KEY}${parameters}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}
