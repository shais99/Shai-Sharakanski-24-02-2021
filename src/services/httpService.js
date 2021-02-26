import axios from "axios";

const httpService = {
  get(endpoint, data, parameters) {
    return ajax(endpoint, "GET", data, parameters);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data, parameters) {
    return ajax(endpoint, "PUT", data, parameters);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};

export default httpService;

async function ajax(endpoint, method = "get", data = {}, parameters = "") {
  // const API_KEY = "dtRV8fgpyz1IuzbANHjS0LnXUIpFvC15";
  const API_KEY = "ztoG057zrGQbIReUPJMcURHmT1ukYv22";

  try {
    const res = await axios({
      url: `https://cors-anywhere.herokuapp.com/${endpoint}?apikey=${API_KEY}${parameters}`,
      method,
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
