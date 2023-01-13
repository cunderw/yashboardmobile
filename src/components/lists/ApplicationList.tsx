import React, {useState} from 'react';
import ApplicationCard from '../cards/ApplicationCard';
import {useApplications} from '../../hooks/UseApplication';
import {Application} from '../../models/Application';
import {FlatList, View} from 'react-native';

const ApplicationList: React.FC = () => {
  const {applications, isError, isLoading, refresh} = useApplications();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshApp, toggleRefreshApp] = useState(false);

  const renderItem = ({item}: {item: Application}) => (
    <ApplicationCard id={item.id} isRefreshing={refreshApp} />
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
      testID="application-list"
      data={applications}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onRefresh={refreshApps}
      refreshing={isRefreshing}
    />
  );
};

export default ApplicationList;
