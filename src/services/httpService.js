import axios from "axios";

export async function get(url) {
  const { data } = await axios.get(url);
  return data;
}

export async function post(url, body) {
  const { data } = await axios.post(url, body);
  return data;
}

export async function put(url, body) {
  const { data } = await axios.put(url, body);
  return data;
}

export async function destroy(url) {
  const { data } = await axios.delete(url);
  return data;
}
