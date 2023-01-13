import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import AddApplicationScreen from '../src/components/screens/AddApplicationScreen';
import '@testing-library/jest-native/extend-expect';
import * as dataApi from '../src/data/AddApplication';

test('renders add application screen', () => {
  render(<AddApplicationScreen />);

  const nameInput = screen.getByTestId('name-input');
  const urlInput = screen.getByTestId('url-input');
  const livenessUrlInput = screen.getByTestId('liveness-url-input');
  const apiKeyInput = screen.getByTestId('api-key-input');
  const keyParamInput = screen.getByTestId('key-param-input');
  const submitButton = screen.getByTestId('submit-button');

  expect(nameInput).toBeVisible();
  expect(urlInput).toBeVisible();
  expect(livenessUrlInput).toBeVisible();
  expect(apiKeyInput).toBeVisible();
  expect(keyParamInput).toBeVisible();
  expect(submitButton).toBeVisible();
});

test('name input is required', () => {
  render(<AddApplicationScreen />);
  const nameInput = screen.getByTestId('name-input');

  expect(screen.getByTestId('name-input-required-error')).toBeVisible();
  fireEvent.changeText(nameInput, 'test');
  expect(screen.queryByTestId('name-input-required-error')).toBeNull();
});

test('url input is required', () => {
  render(<AddApplicationScreen />);
  const nameInput = screen.getByTestId('url-input');

  expect(screen.getByTestId('url-input-required-error')).toBeVisible();
  fireEvent.changeText(nameInput, 'test');
  expect(screen.queryByTestId('url-input-required-error')).toBeNull();
});

test('submits data', () => {
  jest
    .spyOn(dataApi, 'AddApplication')
    .mockImplementation(_data => Promise.resolve({}));
  render(<AddApplicationScreen />);

  const nameInput = screen.getByTestId('name-input');
  const urlInput = screen.getByTestId('url-input');
  const livenessUrlInput = screen.getByTestId('liveness-url-input');
  const apiKeyInput = screen.getByTestId('api-key-input');
  const keyParamInput = screen.getByTestId('key-param-input');
  const submitButton = screen.getByTestId('submit-button');

  fireEvent.changeText(nameInput, 'nameInput');
  fireEvent.changeText(urlInput, 'urlInput');
  fireEvent.changeText(livenessUrlInput, 'livenessUrlInput');
  fireEvent.changeText(apiKeyInput, 'apiKeyInput');
  fireEvent.changeText(keyParamInput, 'keyParamInput');
  fireEvent.press(submitButton);

  expect(dataApi.AddApplication).toBeCalledWith({
    apiKey: 'apiKeyInput',
    keyParam: 'keyParamInput',
    livenessUrl: 'livenessUrlInput',
    name: 'nameInput',
    url: 'urlInput',
  });
});
