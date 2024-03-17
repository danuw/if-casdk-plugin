import axios from 'axios';
import {
  GetBestCarbonRatingParams,
  GetCarbonRatingParams
} from '../types/caTypes';

export const CarbonAwareApi = () => {
  //const baseUrl = 'https://carbon-aware-api.azurewebsites.net';
  const baseUrl = 'http://localhost:5073';
  //let token = '';

  /**
   * 
   *
   * 
   */
  const getBestEmissionsDataForLocationsByTime = async (params: GetBestCarbonRatingParams) => {
    const result = await axios
      .get(baseUrl + '/emissions/bylocations/best' , {
        params: params
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

  /**
   * 
   *
   * 
   */
  const getAverageCarbonIntensity = async (params: GetCarbonRatingParams) => {
    const result = await axios
      .get(baseUrl + '/emissions/bylocations' , {
        params: params
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

  return { getBestEmissionsDataForLocationsByTime, getAverageCarbonIntensity };
}
