import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeUsername: (username: string) => void;
  changeFavoriteIcon: ( iconName: string ) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [ authState, dispatch ] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: '[Auth] - signIn' });
  };

  const logout = () => {
    dispatch({ type: '[Auth] - logout' });
  };

  const changeFavoriteIcon = ( iconName: string ) => {
    dispatch({ type: '[Auth] - changeFavIcon', payload: iconName });
  };

  const changeUsername = ( username: string ) => {
    dispatch({ type: '[Auth] - changeUsername', payload: username });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeUsername,
      changeFavoriteIcon,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
