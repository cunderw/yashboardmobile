import {createContext, useContext} from 'react';
export type AppListUpdated = {
  appListUpdated: boolean;
  setAppListUpdated: (appListUpdated: boolean) => void;
};
export const AppListUpdatedContext = createContext<AppListUpdated>({
  appListUpdated: false, // set a default value
  setAppListUpdated: () => {},
});

export const useAppListUpdatedContext = () => useContext(AppListUpdatedContext);
