import {jest} from '@jest/globals';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        application: {
          id: 'id1',
          name: 'test',
          url: 'test.com',
          livenessUrl: 'test.liveness.com',
          apiKey: 'apiKey',
          keyParam: 'keyParam',
        },
      },
    }),
  };
});
