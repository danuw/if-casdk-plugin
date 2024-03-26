import {CaSdkPlugin, CaSdkPluginConfig} from '../src/lib/casdk/index';

const config: CaSdkPluginConfig = {
  regions: 'uksouth,eastus',
};

const sum = CaSdkPlugin(config);

async function main() {
  const result = await sum.execute([
    {
      duration: 5, // in minutes
      timestamp: '2024-03-01T00:00:00Z',
      location: config.regions,
    },
  ]);
  console.log(Promise.resolve(result));
}

main();
