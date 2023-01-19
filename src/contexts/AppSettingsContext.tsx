import React, {useState, createContext, useContext, useEffect} from 'react';
import {getYashBoardUrl} from '../data/Local';

type AppSettings = {
  yashboardUrl: string;
  setYashoardUrl: (yashboardUrl: string) => void;
};

type Props = {
  children: React.ReactNode;
};

const AppSettingsContext = createContext<AppSettings>({
  yashboardUrl: '',
  setYashoardUrl: () => {},
});

export const useAppSettingsContext = () => useContext(AppSettingsContext);

export const AppSettingsProvider: React.FC<Props> = props => {
  const [yashboardUrl, setYashoardUrl] = useState('');
  const {children} = props;
  const readData = async () => {
    try {
      const url = await getYashBoardUrl();
      if (url !== null) {
        console.debug('Setting URL from local storage: ' + url);
        setYashoardUrl(url);
      }
    } catch (e) {
      console.error('Error reading data', e);
    }
  };
  useEffect(() => {
    readData();
  }, [yashboardUrl]);
  return (
    <AppSettingsContext.Provider value={{yashboardUrl, setYashoardUrl}}>
      {children}
    </AppSettingsContext.Provider>
  );
};
