import { AuthState } from './AuthContext';

type AuthActionType =
| { type: '[Auth] - signIn' }
| { type: '[Auth] - logout' }
| { type: '[Auth] - changeUsername', payload: string }
| { type: '[Auth] - changeFavIcon', payload: string }

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case '[Auth] - signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case '[Auth] - logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case '[Auth] - changeUsername':
      return {
        ...state,
        username: action.payload,
      };
    case '[Auth] - changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    default:
      return state;
  }
};
