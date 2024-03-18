import {PluginInterface} from '../../../interfaces';
import {PluginParams} from '../../../types/common';

import {getBestEmissionsDataForLocationsByTime} from './api';
//import { GetCarbonRatingResponseParams } from './types/caTypes';

export type CaSdkPluginConfig = {
  'input-parameters': string[];
  'output-parameter': string;
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

export const CaSdkPlugin = (
  globalConfig: CaSdkPluginConfig
): PluginInterface => {
  const metadata = {
    kind: 'execute',
  };

  /**
   * Calculate the sum of each .
   */
  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {
    // const safeGlobalConfig = safeGlobalConfig();
    // const inputParameters = safeGlobalConfig['input-parameters'];
    // const outputParameter = safeGlobalConfig['output-parameter'];

    const inputParameters = globalConfig['input-parameters'];
    const outputParameter = globalConfig['output-parameter'];

    const out = await Promise.all(
      inputs.map(async input => {
        const safeInput = input; // TODO validateSingleInput(input, inputParameters);
        const response = await getCarbonRating(safeInput, inputParameters);
        const output = {...safeInput, [outputParameter]: response[0].rating};
        return output;
      })
    );

    return out;
  };

  /**
   * Calculates the sum of the energy components.
   */
  const getCarbonRating = async (
    input: PluginParams,
    inputParameters: string[]
  ): Promise<any> => {
    console.log('input: ', input);
    console.log('inputParameters: ', inputParameters);
    //let carbonRating = new CarbonAwareApi().getAverageCarbonIntensity(input['cloud/region-geolocation'], input['timestamp'], input['duration']);
    //"http://localhost:5073"
    const response = await getBestEmissionsDataForLocationsByTime({
      location: 'eastus',
      start: new Date('2022-08-23T11:15'),
      end: new Date('2022-08-23T11:20'),
    });

    return Promise.resolve(response);
  };

  return {
    metadata,
    execute,
  };
};
