import React from 'react'
import {ProgressBar, MD3Colors} from 'react-native-paper'
import ApplicationCard from './cards/ApplicationCard'
import {useApplications} from '../hooks/UseApplication'
import {Application} from '../models/Application'
import {FlatList} from 'react-native'

const Applications: React.FC = () => {
  const {applications, isError, isLoading, refresh} = useApplications()

  if (isError) return <ProgressBar progress={0.5} color={MD3Colors.error50} />
  if (isLoading) return <ProgressBar progress={0.5} color={MD3Colors.error50} />

  const renderItem = ({item}: {item: Application}) => (
    <ApplicationCard application={item} />
  )
  const refreshApps = () => {
    console.debug('Refreshing Applications')
    refresh(applications, {
      revalidate: true,
    })
    console.debug(applications)
  }
  return (
    <FlatList
      data={applications}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onRefresh={refreshApps}
      refreshing={isLoading}
    />
  )
}

export default Applications
