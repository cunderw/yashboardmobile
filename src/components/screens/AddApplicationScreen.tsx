import React from 'react';
import {AddApplication} from '../../data/YashBoard';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';
import {useAppSettingsContext} from '../../contexts/AppSettingsContext';

const AddApplicationScreen: React.FC = () => {
  const {yashboardUrl} = useAppSettingsContext();
  const addApplication = async (data: Application) => {
    await AddApplication(yashboardUrl, data);
  };

  return <ApplicationForm submitData={addApplication} />;
};

export default AddApplicationScreen;
