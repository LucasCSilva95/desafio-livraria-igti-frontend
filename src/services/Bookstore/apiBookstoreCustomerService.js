import { get } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiGetAllCustomers() {
  const allCustomers = await get(`${BASE_URL}/cliente`);
  return allCustomers;
}

export async function apiGetCustomerById(id) {
  const customer = await get(`${BASE_URL}/cliente/${id}`);
  return customer;
}
