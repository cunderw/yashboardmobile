import React from 'react';
import {UpdateApplication} from '../../data/Applications';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../AppRoutes';

const EditApplicationScreen: React.FC = () => {
  const route = useRoute<RootRouteProps<'EditApplication'>>();

  const updateApplication = async (data: Application) => {
    await UpdateApplication(data);
  };

  return (
    <ApplicationForm
      submitData={updateApplication}
      application={route.params?.application}
    />
  );
};

export default EditApplicationScreen;
