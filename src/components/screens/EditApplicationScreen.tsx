import React from 'react';
import {UpdateApplication} from '../../data/YashBoard';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../AppRoutes';
import {useAppSettingsContext} from '../../contexts/AppSettingsContext';

const EditApplicationScreen: React.FC = () => {
  const {yashboardUrl} = useAppSettingsContext();
  const route = useRoute<RootRouteProps<'EditApplication'>>();

  const updateApplication = async (data: Application) => {
    await UpdateApplication(yashboardUrl, data);
  };

  return (
    <ApplicationForm
      submitData={updateApplication}
      application={route.params?.application}
    />
  );
};

export default EditApplicationScreen;
