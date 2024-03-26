import { CaSdkPlugin } from '../../../lib/casdk';

describe('lib/my-custom-plugin: ', () => {
  describe('MyCustomPlugin(): ', () => {
    it('has metadata field.', () => {
      const pluginInstance = CaSdkPlugin({
        regions: ['uksouth'],
      });

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    it('has multi regions metadata field.', () => {
      const pluginInstance = CaSdkPlugin({
        regions: ['uksouth', 'eastus'],
      });

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    describe('execute(): ', () => {
      it('applies logic on provided inputs array.', async () => {
        const pluginInstance = CaSdkPlugin({
          regions: ['uksouth', 'eastus'],
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
        const pluginInstance = CaSdkPlugin({
          regions: ['uksouth', 'eastus'],
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
