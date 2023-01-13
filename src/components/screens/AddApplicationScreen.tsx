import React from 'react';
import {AddApplication} from '../../data/Applications';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';

type Props = {
  setHasAppListUpdated: Function;
};

const AddApplicationScreen: React.FC<Props> = props => {
  const {setHasAppListUpdated} = props;

  const addApplication = async (data: Application) => {
    await AddApplication(data);
  };

  return (
    <ApplicationForm
      setHasAppListUpdated={setHasAppListUpdated}
      submitData={addApplication}
    />
  );
};

export default AddApplicationScreen;
