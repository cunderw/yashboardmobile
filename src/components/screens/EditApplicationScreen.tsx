import React from 'react';
import {UpdateApplication} from '../../data/Applications';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../AppRoutes';

type Props = {
  setHasAppListUpdated: Function;
};

const EditApplicationScreen: React.FC<Props> = props => {
  const {setHasAppListUpdated} = props;
  const route = useRoute<RootRouteProps<'EditApplication'>>();

  const updateApplication = async (data: Application) => {
    await UpdateApplication(data);
  };

  return (
    <ApplicationForm
      setHasAppListUpdated={setHasAppListUpdated}
      submitData={updateApplication}
      application={route.params?.application}
    />
  );
};

export default EditApplicationScreen;
