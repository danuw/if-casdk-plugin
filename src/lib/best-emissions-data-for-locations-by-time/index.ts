import {PluginInterface} from '../../../interfaces';
import {PluginParams} from '../../../types/common';

import {
  CarbonAwareApi,
  Configuration,
} from '@Green-Software-Foundation/casdk-client';

export type BestEmissionsDataForLocationsByTimeConfig = {
  regions: string[];
  baseUrl: string;
};

/// -l eastus,uksouth -s 2022-08-23T11:15 -e 2022-08-23T11:20

// [
//     {
//       "Location": "UK",
//       "Time": "2022-08-23T08:50:00+00:00",
//       "Rating": 384.64632976,
//       "Duration": "00:05:00"
//     }
//   ]

// 'cloud/region-cfe': regionInput['cfe-region'],
// 'cloud/region-em-zone-id': regionInput['em-zone-id'],
// 'cloud/region-wt-id': regionInput['wt-region-id'],
// 'cloud/region-location': regionInput['location'],
// 'cloud/region-geolocation': regionInput['cloud/region-geolocation'],

export const BestEmissionsDataForLocationsByTime = (
  globalConfig: BestEmissionsDataForLocationsByTimeConfig
): PluginInterface => {
  const metadata = {
    kind: 'execute',
  };

  const conf = new Configuration({basePath: globalConfig.baseUrl});
  const caApi = new CarbonAwareApi(conf);

  /**
   * Calculate the sum of each .
   */
  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {
    const out = await Promise.all(
      inputs.map(async input => {
        const safeInput = input; // TODO validateSingleInput(input, inputParameters);
        const response = await getCarbonRating(input);
        const output = {
          ...safeInput,
          'casdk-region': response[0].location,
          'casdk-rating': response[0].rating,
          'casdk-timestamp': response[0].time,
        };
        return output;
      })
    );

    return out;
  };

  const addSeconds = (date: string, n: number) => {
    const d = new Date(date);
    d.setTime(d.getTime() + n * 1000);
    return d;
  };
  /**
   * Calculates the sum of the energy components.
   */
  const getCarbonRating = async (input: PluginParams): Promise<any> => {
    //let carbonRating = new CarbonAwareApi().getAverageCarbonIntensity(input['cloud/region-geolocation'], input['timestamp'], input['duration']);
    //"http://localhost:5073"
    const regions = globalConfig.regions;
    const start = new Date(input.timestamp);
    const end = new Date(addSeconds(input.timestamp, input.duration));
    console.debug('start, END, REGIONS', start, end, regions), input.duration;
    console.debug(input.duration, input.timestamp, regions);
    const response = await caApi.getBestEmissionsDataForLocationsByTime(
      regions,
      start.toISOString(),
      end.toISOString()
    );

    return Promise.resolve(response.data);
  };

  return {
    metadata,
    execute,
  };
};
