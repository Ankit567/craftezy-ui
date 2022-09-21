import { CoreApi } from "../utils/core-api";
import { API_ENDPOINTS } from "../utils/endpoints";
import { useInfiniteQuery, useQuery } from "react-query";
import { mapPaginatorData } from "../utils/data-mappers";

const BrandService = new CoreApi(API_ENDPOINTS.TYPE);

export const fetchInfiniteBrands = async ({ queryKey, pageParam }) => {
  const params = queryKey?.[1] ?? {};
  let fetchedData = {};

  if (pageParam) {
    const response = await BrandService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await BrandService.find(params);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

export const useBrandsInfiniteQuery = (params, options) => {
  return useInfiniteQuery([API_ENDPOINTS.TYPE, params], fetchInfiniteBrands, {
    ...options,
    getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
  });
};

export const fetchBrands = async ({ queryKey }) => {
  const params = queryKey[1];
  const response = await BrandService.find(params);
  const fetchedData = response?.data;
  return { data: fetchedData?.data };
};

export const useBrandsQuery = (options) => {
  return useQuery([API_ENDPOINTS.TYPE, options], fetchBrands);
};

export const fetchBrand = async (slug) => {
  const { data } = await BrandService.findOne(slug);
  return { type: data };
};

export const useBrandQuery = (slug) => {
  return useQuery([API_ENDPOINTS.TYPE, slug], () => fetchBrand(slug), { enabled: Boolean(slug) });
};
