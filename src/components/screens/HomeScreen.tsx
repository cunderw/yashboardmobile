import React from 'react';
import ApplicationList from '../lists/ApplicationList';

type Props = {
  hasAppListUpdated: boolean;
  setHasAppListUpdated: Function;
};

const HomeScreen: React.FC<Props> = props => {
  const {hasAppListUpdated, setHasAppListUpdated} = props;
  return (
    <ApplicationList
      hasAppListUpdated={hasAppListUpdated}
      setHasAppListUpdated={setHasAppListUpdated}
    />
  );
};

export default HomeScreen;
