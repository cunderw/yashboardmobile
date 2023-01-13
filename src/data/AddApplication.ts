type AddAppData = {
  name: string;
  url: string;
  livenessUrl: string;
  apiKey: string;
  keyParam: string;
};

export const AddApplication = (data: AddAppData) => {
  return fetch('http://127.0.0.1:3000/api/applications/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());
};
