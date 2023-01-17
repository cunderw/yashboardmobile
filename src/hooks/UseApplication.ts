import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import {Application, ApplicationStatus} from '../models/Application';

export const useApplication = (id: string) => {
  const {data, error, isLoading, mutate} = useSWR<Application, Error>(
    `http://10.1.0.200:3000/api/applications/${id}`,
    fetcher,
  );
  if (error) {
    console.log(error);
  }
  return {
    application: data ?? {
      id: '',
      name: '',
      url: '',
      livenessUrl: '',
      apiKey: '',
      keyParam: '',
      status: ApplicationStatus.ERR,
    },
    isLoading,
    isError: error,
    refresh: mutate,
  };
};

export const useApplications = () => {
  const {data, error, isLoading, mutate} = useSWR<Application[], Error>(
    'http://10.1.0.200:3000/api/applications/',
    fetcher,
  );
  if (error) {
    console.log(error);
  }
  return {
    applications: data ?? [],
    isLoading,
    isError: error,
    refresh: mutate,
  };
};
