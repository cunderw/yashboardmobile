import React from 'react'
import {render, screen} from '@testing-library/react-native'
import ApplicationCard from '../src/components/ApplicationCard'
import {Application, ApplicationStatus} from '../src/models/Application'

test('redners application card', () => {
  const application: Application = {
    id: 'id1',
    name: 'test',
    url: 'test.com',
    livenessUrl: 'test.liveness.com',
    apiKey: 'apiKey',
    keyParam: 'keyParam',
    status: ApplicationStatus.OK,
  }
  const mockFn = jest.fn((_appId: string) => {
    return {
      application,
      isError: false,
      isLoading: false,
    }
  })

  render(
    <ApplicationCard
      key={application.id}
      appId={application.id}
      isEditMode={false}
      useApplication={mockFn}
    />,
  )

  expect(mockFn).toBeCalledWith(application.id)

  const statusIcon = screen.getByTestId('statusIcon')
  expect(statusIcon.props.children.props.source).toEqual(
    'checkbox-marked-circle',
  )
})
