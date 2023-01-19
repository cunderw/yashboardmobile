import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import {Application, ApplicationStatus} from '../models/Application';

export const useApplication = (baseUrl: string, id: string) => {
  const {data, error, isLoading, mutate} = useSWR<Application, Error>(
    `${baseUrl}/api/applications/${id}`,
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

export const useApplications = (baseUrl: string) => {
  const {data, error, isLoading, mutate} = useSWR<Application[], Error>(
    `${baseUrl}/api/applications/`,
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
