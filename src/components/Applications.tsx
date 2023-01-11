import React from 'react'
import {View} from 'react-native'
import {ProgressBar, MD3Colors} from 'react-native-paper'
import ApplicationCard from './ApplicationCard'
import {useApplications, useApplication} from '../hooks/UseApplication'

type Props = {
  isEditMode: boolean
}

const Applications: React.FC<Props> = props => {
  const {applications, isError, isLoading} = useApplications()

  if (isError) return <ProgressBar progress={0.5} color={MD3Colors.error50} />
  if (isLoading) return <ProgressBar progress={0.5} color={MD3Colors.error50} />

  return (
    <View>
      {applications.map(application => (
        <ApplicationCard
          key={application.id}
          appId={application.id}
          isEditMode={props.isEditMode}
          useApplication={useApplication}
        />
      ))}
    </View>
  )
}

export default Applications
