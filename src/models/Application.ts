export enum ApplicationStatus {
  OK,
  ERR,
}

export type Application = {
  id: string;
  name: string;
  url: string;
  livenessUrl: string;
  apiKey: string;
  keyParam: string;
  status: ApplicationStatus;
};
