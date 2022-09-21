import { CoreApi } from "../../core-api";
import { API_ENDPOINTS } from "../utils/endpoints";
import { useInfiniteQuery, useQuery } from "react-query";
import { mapPaginatorData } from "../utils/data-mappers";

const CategoryService = new CoreApi(API_ENDPOINTS.CATEGORIES);

export const fetchInfiniteCategories = async ({ queryKey, pageParam }) => {
  const params = queryKey[1];
  let fetchedData = {};
  if (pageParam) {
    const response = await CategoryService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await CategoryService.find(params);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

export const useCategoriesInfiniteQuery = (params, options) => {
  return useInfiniteQuery([API_ENDPOINTS.PRODUCTS, params], fetchInfiniteCategories, {
    ...options,
    getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
  });
};

export const fetchCategories = async ({ queryKey }) => {
  const params = queryKey[1];
  const response = await CategoryService.find(params);
  const fetchedData = response?.data;
  return { data: fetchedData?.data };
};

export const useCategoriesQuery = (options) => {
  return useQuery([API_ENDPOINTS.CATEGORIES, options], fetchCategories);
};

export const fetchCategory = async (params) => {
  const { data } = await CategoryService.findOne(params);
  return data;
};

export const useCategoryQuery = (params) => {
  return useQuery([API_ENDPOINTS.CATEGORIES, params], () => fetchCategory(params));
};
