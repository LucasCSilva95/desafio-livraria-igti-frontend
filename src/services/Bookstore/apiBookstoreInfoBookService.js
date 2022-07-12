import { errorResponse } from "../../helpers/errorHelper";
import { post, put, destroy } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiCreateBookInfo(bookInfoData) {
  const bookInfo = await post(`${BASE_URL}/livro/info`, bookInfoData).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return bookInfo;
}

export async function apiUpdateBookInfo(bookInfoData) {
  const bookInfo = await put(`${BASE_URL}/livro/info`, bookInfoData).catch(
    (error) => {
      errorResponse(error);
    }
  );
  return bookInfo;
}

export async function apiDeleteBookInfo(bookInfoId) {
  await destroy(`${BASE_URL}/livro/info/${bookInfoId}`).catch((error) => {
    errorResponse(error);
  });
}
