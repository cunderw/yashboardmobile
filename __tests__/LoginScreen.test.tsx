import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import * as dataApi from '../src/data/YashBoard';
import LoginScreen from '../src/components/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('renders login screen', () => {
  render(<LoginScreen />);

  const urlInput = screen.getByTestId('url-input');
  const submitButton = screen.getByTestId('submit-button');

  expect(urlInput).toBeVisible();
  expect(submitButton).toBeVisible();
});

test('url input is required', async () => {
  render(<LoginScreen />);
  const nameInput = screen.getByTestId('url-input');

  expect(screen.getByTestId('url-input-required-error')).toBeVisible();
  await act(async () => {
    fireEvent.changeText(nameInput, 'test');
  });
  expect(screen.queryByTestId('url-input-required-error')).toBeNull();
});

test('submits data', async () => {
  jest.spyOn(dataApi, 'GetStatus').mockImplementation(_baseUrl => {
    return fetch('');
  });

  render(<LoginScreen />);

  const urlInput = screen.getByTestId('url-input');
  const submitButton = screen.getByTestId('submit-button');

  await act(async () => {
    fireEvent.changeText(urlInput, 'urlInput');
  });

  fireEvent.press(submitButton);
  expect(dataApi.GetStatus).toBeCalledWith('urlInput');
  await waitFor(() => {
    expect(AsyncStorage.setItem).toBeCalledWith('@yashboard_url', 'urlInput');
  });
});
