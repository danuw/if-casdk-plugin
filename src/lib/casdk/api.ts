import axios from 'axios';
import { stringify } from 'qs';
import {
  GetBestCarbonRatingParams,
  GetCarbonRatingParams,
} from '../../../types/caTypes';

export const getBestEmissionsDataForLocationsByTime = async (
  params: GetBestCarbonRatingParams
) => {
  const baseUrl = params.baseUrl; // 'https://carbon-aware-api.azurewebsites.net';
  const queryParams: object = { location: params.location, start: params.start, end: params.end }
  const result = await axios
    .get(baseUrl + '/emissions/bylocations/best', {
      params: queryParams,
      paramsSerializer: params => {
        return stringify(params);
      },
    })
    .catch(error => {
      throw new Error(error);
    });

  return result.data;
};

/**
 *
 *
 *
 */
export const getAverageCarbonIntensity = async (
  params: GetCarbonRatingParams
) => {
  const baseUrl = ''; // 'https://carbon-aware-api.azurewebsites.net';
  const result = await axios
    .get(baseUrl + '/emissions/bylocations', {
      params: params,
    })
    .catch(error => {
      throw new Error(error);
    });

  if (result.status !== 200) {
    throw new Error('API failure code: {result.status}');
  }

  if (!('data' in result) || !Array.isArray(result.data)) {
    throw new Error('Invalid response from CA-SDK API');
  }

  return result.data;
};
