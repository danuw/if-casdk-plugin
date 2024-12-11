import {BestEmissionsDataForLocationsByTime} from '../../../lib/best-emissions-data-for-locations-by-time';

describe('lib/best-emissions-data-for-locations-by-time: ', () => {
  describe('BestEmissionsDataForLocationsByTime(): ', () => {
    it('has metadata field.', () => {
      const pluginInstance = BestEmissionsDataForLocationsByTime({
        regions: ['uksouth'],
        baseUrl: 'https://carbon-aware-api.azurewebsites.net',
      });

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    it('has multi regions metadata field.', () => {
      const pluginInstance = BestEmissionsDataForLocationsByTime({
        regions: ['uksouth', 'eastus'],
        baseUrl: 'https://carbon-aware-api.azurewebsites.net',
      });

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    describe('execute(): ', () => {
      it('applies logic on provided inputs array.', async () => {
        const pluginInstance = BestEmissionsDataForLocationsByTime({
          regions: ['uksouth', 'eastus'],
          baseUrl: 'https://carbon-aware-api.azurewebsites.net',
        });
        const inputs = [
          {
            timestamp: '2023-07-06T00:02',
            duration: 1,
            'cpu/utilization': 20,
          },
        ];
        const response = await pluginInstance.execute(inputs, {});
        expect(response[0]).toHaveProperty('casdk-rating');
        expect(response[0]).toHaveProperty('casdk-region');
        expect(response[0]['casdk-rating']).toBeGreaterThan(0);
      });
    });
    describe('execute(): ', () => {
      it('applies logic on provided inputs array for multi regions.', async () => {
        const pluginInstance = BestEmissionsDataForLocationsByTime({
          regions: ['uksouth', 'eastus'],
          baseUrl: 'https://carbon-aware-api.azurewebsites.net',
        });
        const inputs = [
          {
            timestamp: '2023-07-06T00:02',
            duration: 1,
            'cpu/utilization': 20,
          },
        ];
        const response = await pluginInstance.execute(inputs, {});
        expect(response[0]).toHaveProperty('casdk-rating');
        expect(response[0]).toHaveProperty('casdk-region');
        expect(response[0]['casdk-rating']).toBeGreaterThan(0);
      });
    });
  });
});
