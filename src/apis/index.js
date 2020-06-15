import Axios from "axios";

const merchantUId = "c4656bc2-cc41-4486-8d1e-1b4665c57fa7";

export const getCategories = () =>
  Axios.get(`getAllCategories?merchantUId=${merchantUId}`);

export const getAllItems = () =>
  Axios.get(`getAllItems?merchantUId=${merchantUId}`);
