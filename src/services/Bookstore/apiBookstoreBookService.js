import { errorResponse } from "../../helpers/errorHelper";
import { get, post, put, destroy } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiGetAllBooks() {
  const allBooks = await get(`${BASE_URL}/livro`).catch((error) => {
    errorResponse(error);
  });
  return allBooks;
}

export async function apiGetBookById(bookId) {
  const book = await get(`${BASE_URL}/livro/${bookId}`).catch((error) => {
    errorResponse(error);
  });
  return book;
}

export async function apiCreateBook(bookData) {
  const book = await post(`${BASE_URL}/livro/`, bookData).catch((error) => {
    errorResponse(error);
  });
  return book;
}

export async function apiUpdateBook(bookData) {
  const book = await put(`${BASE_URL}/livro/`, bookData).catch((error) => {
    errorResponse(error);
  });
  return book;
}

export async function apiDeleteBook(bookId) {
  await destroy(`${BASE_URL}/livro/${bookId}`).catch((error) => {
    errorResponse(error);
  });
}
