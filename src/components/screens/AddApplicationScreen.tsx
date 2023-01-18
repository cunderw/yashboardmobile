import React from 'react';
import {AddApplication} from '../../data/Applications';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';

const AddApplicationScreen: React.FC = () => {
  const addApplication = async (data: Application) => {
    await AddApplication(data);
  };

  return <ApplicationForm submitData={addApplication} />;
};

export default AddApplicationScreen;
