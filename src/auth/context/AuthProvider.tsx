import { useReducer } from 'react';
import { AppAction, AppState } from '../../interfaces/app';
import { AuthContext } from './AuthContext';
import { appReducer } from './appReducer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AppState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null') || undefined;

  return {
    logged: Boolean(user),
    user: user,
  };
};

export const AuthProvider = ({ children }: Props) => {
  const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE, init);

  const login = () => {
    const user = {
      name: 'Omar Fandiño',
    };

    const action: AppAction = {
      type: 'login',
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    const action: AppAction = {
      type: 'logout',
    };

    localStorage.removeItem('user');
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        appState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
