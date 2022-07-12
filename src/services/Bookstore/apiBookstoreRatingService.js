import { errorResponse } from "../../helpers/errorHelper";
import { post, destroy } from "../httpService";

const BASE_URL = process.env.REACT_APP_API_BOOKSTORE_URL;

export async function apiCreateRating(bookId, ratingData) {
  const rating = await post(
    `${BASE_URL}/livro/${bookId}/avaliacao`,
    ratingData
  ).catch((error) => {
    errorResponse(error);
  });
  return rating;
}

export async function apiDeleteRating(ratingId, ratingIndex) {
  await destroy(`${BASE_URL}/livro/${ratingId}/avaliacao/${ratingIndex}`).catch(
    (error) => {
      errorResponse(error);
    }
  );
}
