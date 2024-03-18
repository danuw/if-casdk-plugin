import axios from 'axios';
import {
  GetBestCarbonRatingParams,
  GetCarbonRatingParams,
} from '../../../types/caTypes';

export const getBestEmissionsDataForLocationsByTime = async (
  params: GetBestCarbonRatingParams
) => {
  const baseUrl = 'https://carbon-aware-api.azurewebsites.net';
  const result = await axios
    .get(baseUrl + '/emissions/bylocations/best', {
      params: params,
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
  const baseUrl = 'https://carbon-aware-api.azurewebsites.net';
  const result = await axios
    .get(baseUrl + '/emissions/bylocations', {
      params: params,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
    .catch(error => {
      throw new Error(error);
    });

  // if (result.status !== 200) {
  //   throw new APIRequestError(
  //     errorBuilder({
  //       message: `Error fetching data from WattTime API: ${JSON.stringify(
  //         result.status
  //       )}`,
  //     })
  //   );
  // }

  // if (!('data' in result) || !Array.isArray(result.data)) {
  //   throw new APIRequestError(
  //     errorBuilder({
  //       message: 'Invalid response from WattTime API',
  //     })
  //   );
  // }

  return result.data;
};
