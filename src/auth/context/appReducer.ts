import { AppAction, AppState } from '../../interfaces/app';

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case 'logout':
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};
