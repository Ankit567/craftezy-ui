import { CoreApi } from "../../core-api";
import { API_ENDPOINTS } from "../../rest/utils/endpoints";
import { useQuery } from "react-query";

const AttributesService = new CoreApi(API_ENDPOINTS.ATTRIBUTES);

export const fetchAttributes = async () => {
  const { data } = await AttributesService.findAll();
  return { attributes: data };
};

export const useAttributesQuery = () => {
  return useQuery(API_ENDPOINTS.ATTRIBUTES, fetchAttributes);
};
