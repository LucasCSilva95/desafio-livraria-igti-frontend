import { errorResponse } from "../../helpers/errorHelper";
import { get, post, put, destroy } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiGetAllCustomers() {
  const allCustomers = await get(`${BASE_URL}/cliente`).catch((error) => {
    errorResponse(error);
  });
  return allCustomers;
}

export async function apiGetCustomerById(customerId) {
  const customer = await get(`${BASE_URL}/cliente/${customerId}`).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return customer;
}

export async function apiCreateCustomer(customerData) {
  const customer = await post(`${BASE_URL}/cliente/`, customerData).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return customer;
}

export async function apiUpdateCustomer(customerData) {
  const customer = await put(`${BASE_URL}/cliente/`, customerData).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return customer;
}

export async function apiDeleteCustomer(customerId) {
  await destroy(`${BASE_URL}/cliente/${customerId}`).catch((error) => {
    errorResponse(error);
  });
}
