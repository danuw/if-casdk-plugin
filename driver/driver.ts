import {CaSdkPlugin, CaSdkPluginConfig} from '../index';

const config: CaSdkPluginConfig = {
  'input-parameters': ['location'],
  'output-parameter': 'CarbonIntensity',
};

const sum = CaSdkPlugin(config);

async function main() {
  const result = await sum.execute([
    {
      duration: 5, // in minutes
      timestamp: '2024-03-01T00:00:00Z',
      location: 'eastus',
    },
  ]);
  console.log(Promise.resolve(result));
}

main();
