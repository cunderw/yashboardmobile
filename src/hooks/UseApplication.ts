import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import {Application, ApplicationStatus} from '../models/Application';

export const useApplication = (id: string) => {
  const {data, error, isLoading, mutate} = useSWR<Application, Error>(
    `http://127.0.0.1:3000/api/applications/${id}`,
    fetcher,
  );
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
    'http://127.0.0.1:3000/api/applications/',
    fetcher,
  );
  return {
    applications: data ?? [],
    isLoading,
    isError: error,
    refresh: mutate,
  };
};
