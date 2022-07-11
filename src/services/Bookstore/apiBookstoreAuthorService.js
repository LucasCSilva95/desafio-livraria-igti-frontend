import { errorResponse } from "../../helpers/errorHelper";
import { get, post, put, destroy } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiGetAllAuthors() {
  const allAuthors = await get(`${BASE_URL}/autor`).catch((error) => {
    errorResponse(error);
  });
  return allAuthors;
}

export async function apiGetAuthorById(authorId) {
  const author = await get(`${BASE_URL}/autor/${authorId}`).catch((error) => {
    errorResponse(error);
  });
  return author;
}

export async function apiCreateAuthor(authorData) {
  const author = await post(`${BASE_URL}/autor/`, authorData).catch((error) => {
    errorResponse(error);
  });
  return author;
}

export async function apiUpdateAuthor(authorData) {
  const author = await put(`${BASE_URL}/autor/`, authorData).catch((error) => {
    errorResponse(error);
  });
  return author;
}

export async function apiDeleteAuthor(authorId) {
  await destroy(`${BASE_URL}/autor/${authorId}`).catch((error) => {
    errorResponse(error);
  });
}
