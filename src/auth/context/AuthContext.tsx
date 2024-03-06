import { createContext } from 'react';
import { AppState } from '../../interfaces/app';

interface AppContextProps {
  appState: AppState;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AppContextProps>(
  {} as AppContextProps,
);
