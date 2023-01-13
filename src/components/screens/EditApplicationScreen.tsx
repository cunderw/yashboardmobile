import React from 'react';
import {UpdateApplication} from '../../data/Applications';
import {Application} from '../../models/Application';
import ApplicationForm from '../forms/ApplicationForm';

type Props = {
  setHasAppListUpdated: Function;
};

const EditApplicationScreen: React.FC<Props> = props => {
  const {setHasAppListUpdated} = props;

  const updateApplication = async (data: Application) => {
    await UpdateApplication(data);
  };

  return (
    <ApplicationForm
      setHasAppListUpdated={setHasAppListUpdated}
      submitData={updateApplication}
    />
  );
};

export default EditApplicationScreen;
