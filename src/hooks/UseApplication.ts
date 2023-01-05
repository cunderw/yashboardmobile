import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import {Application, ApplicationStatus} from '../models/Application'

export const useApplication = (id: string) => {
  const {data, error, isLoading} = useSWR<Application, Error>(
    `http://127.0.0.1:3000/api/applications/${id}`,
    fetcher,
    {refreshInterval: 1000},
  )
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
  }
}

export const useApplications = () => {
  const {data, error, isLoading} = useSWR<Application[], Error>(
    'http://127.0.0.1:3000/api/applications/',
    fetcher,
    {refreshInterval: 1000},
  )
  return {
    applications: data ?? [],
    isLoading,
    isError: error,
  }
}
