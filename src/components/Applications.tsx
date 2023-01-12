import React, {useState} from 'react';
import ApplicationCard from './cards/ApplicationCard';
import {useApplications, useApplication} from '../hooks/UseApplication';
import {Application} from '../models/Application';
import {FlatList, View} from 'react-native';

const Applications: React.FC = () => {
  const {applications, isError, isLoading, refresh} = useApplications();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshApp, toggleRefreshApp] = useState(false);

  const renderItem = ({item}: {item: Application}) => (
    <ApplicationCard
      id={item.id}
      useApplication={useApplication}
      isRefreshing={refreshApp}
    />
  );

  const refreshApps = () => {
    setIsRefreshing(true);
    toggleRefreshApp(prev => !prev);
    refresh(applications, {
      revalidate: true,
    });
    console.debug('Refreshed Applications', applications);
    setIsRefreshing(false);
  };

  if (isError) {
    return <View />;
  }

  if (isLoading) {
    return <View />;
  }

  return (
    <FlatList
      data={applications}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onRefresh={refreshApps}
      refreshing={isRefreshing}
    />
  );
};

export default Applications;
