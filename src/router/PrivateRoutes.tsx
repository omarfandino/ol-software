import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PrivateRoutes = ({ children }: Props) => {
  const { appState } = useContext(AuthContext);
  const { logged } = appState;
  
  return logged ? children : <Navigate to="/login" />;
};
