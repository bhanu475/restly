import { fetchWrapper } from "../helpers/fetchWrapper";

export const restarentsService = {
  get,
  post,
  GetById,
};

function get() {
  return fetchWrapper.get("https://restly.deventure.ro/api/Product/GetProductById?productId=26");
}
function post(perms) {
  var body = {
    "Page": 0,
    "PageSize": 50,
    "RestaurantId": 26,
    "Term": "",
    "ProductCategoryIdList": []
  }

  return fetchWrapper.post("https://restly.deventure.ro/api/Product/GetMenuList", body);
}
function GetById() {
  return fetchWrapper.get("https://restly.deventure.ro/api/Product/GetProductById?productId=44")
}

