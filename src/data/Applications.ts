import {Application} from '../models/Application';

export const AddApplication = (data: Application) => {
  return fetch('http://127.0.0.1:3000/api/applications/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const UpdateApplication = (data: Application) => {
  return fetch('http://127.0.0.1:3000/api/applications/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const DeleteApplication = (id: string) => {
  const data = {
    id,
  };
  return fetch('http://127.0.0.1:3000/api/applications/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
