import {CaSdkPlugin, CaSdkPluginConfig} from '../src/lib/casdk/index';

const config: CaSdkPluginConfig = {
  regions: ['uksouth', 'eastus'],
  baseUrl: 'https://carbon-aware-api.azurewebsites.net',
};

const sum = CaSdkPlugin(config);

async function main() {
  const result = await sum.execute([
    {
      duration: 18 * 60 * 60, // in seconds
      timestamp: '2024-05-01T00:00:00Z',
      location: config.regions,
    },
  ]);
  console.log(result);
}

main();
