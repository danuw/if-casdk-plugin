import {CaSdkPlugin} from '../../../lib/casdk';

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

    // describe('execute(): ', () => {
    //   it('applies logic on provided inputs array.', async () => {
    //     const pluginInstance = CaSdkPlugin({
    //       'input-parameters': ['something'],
    //       'output-parameter': 'dummy',
    //     });
    //     const inputs = [{}];

    //     const response = await pluginInstance.execute(inputs, {});
    //     expect(response).toEqual(inputs);
    //   });
    //   });
  });
});
