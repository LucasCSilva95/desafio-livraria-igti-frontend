export function errorResponse(error) {
  throw new Error(error?.response?.data?.error);
}
