import React, {useState, createContext, useContext} from 'react';

type AppListUpdated = {
  appListUpdated: boolean;
  setAppListUpdated: (appListUpdated: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

const AppListUpdatedContext = createContext<AppListUpdated>({
  appListUpdated: false,
  setAppListUpdated: () => {},
});

export const useAppListUpdatedContext = () => useContext(AppListUpdatedContext);

export const AppListUpdatedProvider: React.FC<Props> = props => {
  const [appListUpdated, setAppListUpdated] = useState(false);
  const {children} = props;
  return (
    <AppListUpdatedContext.Provider value={{appListUpdated, setAppListUpdated}}>
      {children}
    </AppListUpdatedContext.Provider>
  );
};
