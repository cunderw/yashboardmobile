import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import ApplicationList from '../src/components/lists/ApplicationList';
import * as useApps from '../src/hooks/UseApplication';
import {Application, ApplicationStatus} from '../src/models/Application';

test('redners application list', async () => {
  const applications: Application[] = [
    {
      id: 'id1',
      name: 'test',
      url: 'test.com',
      livenessUrl: 'test.liveness.com',
      apiKey: 'apiKey',
      keyParam: 'keyParam',
      status: ApplicationStatus.OK,
    },
    {
      id: 'id2',
      name: 'test',
      url: 'test.com',
      livenessUrl: 'test.liveness.com',
      apiKey: 'apiKey',
      keyParam: 'keyParam',
      status: ApplicationStatus.OK,
    },
    {
      id: 'id3',
      name: 'test',
      url: 'test.com',
      livenessUrl: 'test.liveness.com',
      apiKey: 'apiKey',
      keyParam: 'keyParam',
      status: ApplicationStatus.OK,
    },
  ];

  jest.spyOn(useApps, 'useApplications').mockImplementation(() => {
    return {
      applications: applications,
      isError: undefined,
      isLoading: false,
      refresh: jest.fn(),
    };
  });

  jest.spyOn(useApps, 'useApplication').mockImplementation((id: string) => {
    return {
      application: applications.find(a => a.id === id) || {
        id: 'id1',
        name: 'test',
        url: 'test.com',
        livenessUrl: 'test.liveness.com',
        apiKey: 'apiKey',
        keyParam: 'keyParam',
        status: ApplicationStatus.OK,
      },
      isError: undefined,
      isLoading: false,
      refresh: jest.fn(),
    };
  });

  render(
    <ApplicationList
      hasAppListUpdated={false}
      setHasAppListUpdated={() => {}}
    />,
  );

  let cards = screen.getAllByTestId('application-card');
  expect(cards.length).toBe(3);

  jest.spyOn(useApps, 'useApplications').mockImplementation(() => {
    return {
      applications: [applications[0]],
      isError: undefined,
      isLoading: false,
      refresh: jest.fn(),
    };
  });

  const scrollView = screen.getByTestId('application-list');
  const {refreshControl} = scrollView.props;
  refreshControl.props.onRefresh();

  cards = screen.getAllByTestId('application-card');
  expect(cards.length).toBe(1);
});
