import { fetchWrapper } from "../helpers/fetchWrapper";

export const restarentsService = {
    get,
};

function get() {
  return fetchWrapper.get("https://restly.deventure.ro/api/Product/GetProductById?productId=26");
}

