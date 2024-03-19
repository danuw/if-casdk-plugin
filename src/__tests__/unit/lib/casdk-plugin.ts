import { CaSdkPlugin } from '../../../lib/casdk';

describe('lib/my-custom-plugin: ', () => {
  describe('MyCustomPlugin(): ', () => {
    it('has metadata field.', () => {
      const pluginInstance = CaSdkPlugin({
        'input-parameters': ['something'],
        'output-parameter': 'dummy',
      });

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    describe('execute(): ', () => {
      it('applies logic on provided inputs array.', async () => {
        const pluginInstance = CaSdkPlugin({
          'input-parameters': ['something'],
          'output-parameter': 'dummy',
        });
        const inputs = [
          {
            timestamp: '2023-07-06T00:02',
            duration: 1,
            'cpu/utilization': 20,
          },
        ];
        const response = await pluginInstance.execute(inputs, {});
        expect(response[0]).toHaveProperty("dummy");
        expect(response[0]['dummy']).toBeGreaterThan(0);
      });
    });
  });
});
