import { errorResponse } from "../../helpers/errorHelper";
import { get, post, put, destroy } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiGetAllSales() {
  const allSales = await get(`${BASE_URL}/venda`).catch((error) => {
    errorResponse(error);
  });
  return allSales;
}

export async function apiGetSaleById(saleId) {
  const sale = await get(`${BASE_URL}/venda/${saleId}`).catch((error) => {
    errorResponse(error);
  });
  return sale;
}

export async function apiGetSaleByCustomerId(customerId) {
  const sale = await get(`${BASE_URL}/venda?clienteId=${customerId}`).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return sale;
}

export async function apiGetSaleByAuthorId(authorId) {
  const sale = await get(`${BASE_URL}/venda?autorId=${authorId}`).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return sale;
}

export async function apiGetSaleBybookId(bookId) {
  const sale = await get(`${BASE_URL}/venda?livroId=${bookId}`).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return sale;
}

export async function apiCreateSale(saleData) {
  const sale = await post(`${BASE_URL}/venda/`, saleData).catch((error) => {
    errorResponse(error);
  });
  return sale;
}

export async function apiUpdateSale(saleData) {
  const sale = await put(`${BASE_URL}/venda/`, saleData).catch((error) => {
    errorResponse(error);
  });
  return sale;
}

export async function apiDeleteSale(saleId) {
  await destroy(`${BASE_URL}/venda/${saleId}`).catch((error) => {
    errorResponse(error);
  });
}
