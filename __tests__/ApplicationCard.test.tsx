import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ApplicationCard from '../src/components/cards/ApplicationCard';
import {Application, ApplicationStatus} from '../src/models/Application';
import * as useApps from '../src/hooks/UseApplication';

test('redners application card', () => {
  const application: Application = {
    id: 'id1',
    name: 'test',
    url: 'test.com',
    livenessUrl: 'test.liveness.com',
    apiKey: 'apiKey',
    keyParam: 'keyParam',
    status: ApplicationStatus.OK,
  };

  jest.spyOn(useApps, 'useApplication').mockImplementation((_appId: string) => {
    return {
      application,
      isError: undefined,
      isLoading: false,
      refresh: jest.fn(),
    };
  });

  render(
    <ApplicationCard
      key={application.id}
      id={application.id}
      isRefreshing={false}
    />,
  );

  expect(useApps.useApplication).toBeCalledWith('', application.id);

  const statusIcon = screen.getByTestId('status-icon');
  expect(statusIcon.props.children[0]).toEqual('');
});
