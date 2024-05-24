import {CaSdkPlugin, CaSdkPluginConfig} from '../src/lib/casdk/index';

const config: CaSdkPluginConfig = {
  regions: ['uksouth', 'eastus'],
  baseUrl: 'https://carbon-aware-api.azurewebsites.net', //'http://localhost:5073'
};

const sum = CaSdkPlugin(config);

async function main() {
  const result = await sum.execute([
    {
      duration: 35 * 60 * 60, // in seconds, so 35 hours if 35 * 60 * 60 from timestamp
      timestamp: '2024-05-01T00:00:00Z',
      location: config.regions,
    },
  ]);
  console.log(result);
}

main();
