import React from 'react'
import {render, screen} from '@testing-library/react-native'
import ApplicationCard from '../src/components/cards/ApplicationCard'
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

  render(<ApplicationCard key={application.id} application={application} />)

  const statusIcon = screen.getByTestId('statusIcon')

  expect(statusIcon.props.children.props.source).toEqual(
    'checkbox-marked-circle',
  )
})
