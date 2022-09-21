import { CoreApi } from "../utils/core-api";
import { API_ENDPOINTS } from "../utils/endpoints";
import { mapPaginatorData } from "../utils/data-mappers";
import { useInfiniteQuery, useQuery } from "react-query";

const ProductService = new CoreApi(API_ENDPOINTS.PRODUCTS);

const fetchInfiniteProducts = async ({ queryKey, pageParam }) => {
  const params = queryKey[1];
  let fetchedData = {};
  if (pageParam) {
    const response = await ProductService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await ProductService.find(params);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

const useProductsInfiniteQuery = (params, options) => {
  return useInfiniteQuery([API_ENDPOINTS.PRODUCTS, params], fetchInfiniteProducts, {
    ...options,
    getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
  });
};

export { useProductsInfiniteQuery, fetchInfiniteProducts };

export const fetchProducts = async ({ queryKey }) => {
  const params = queryKey[1];
  const response = await ProductService.find(params);
  return response?.data;
};

export const useProductsQuery = (options) => {
  return useQuery([API_ENDPOINTS.PRODUCTS, options], fetchProducts, { keepPreviousData : true });
};

export const fetchProduct = async () => {
  const { data } = await ProductService.findOne(slug);
  return data;
};

export const useProductQuery = () => {
  return useQuery < Product, Error > ([API_ENDPOINTS.PRODUCTS, slug], () => fetchProduct(slug));
};
