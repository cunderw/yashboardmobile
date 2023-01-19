import {Application} from '../models/Application';

export const AddApplication = (baseUrl: string, data: Application) => {
  return fetch(`${baseUrl}/api/applications/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const UpdateApplication = (baseUrl: string, data: Application) => {
  return fetch(`${baseUrl}/api/applications/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const DeleteApplication = (baseUrl: string, id: string) => {
  const data = {
    id,
  };
  return fetch(`${baseUrl}/api/applications/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const GetStatus = (baseUrl: string) => {
  return fetch(`${baseUrl}/api/status/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
