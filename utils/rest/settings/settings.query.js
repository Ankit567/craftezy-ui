import { CoreApi } from "../utils/core-api";
import { API_ENDPOINTS } from "../utils/endpoints";
import { useQuery } from "react-query";

const SettingsService = new CoreApi(API_ENDPOINTS.SETTINGS);

export const fetchSettings = async () => {
  const { data } = await SettingsService.findAll();
  return { settings: data };
};

export const useSettingsQuery = () => {
  return useQuery(API_ENDPOINTS.SETTINGS, fetchSettings);
};
