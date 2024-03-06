export interface User {
  name: string;
  lastName: string;
  id: number;
  role: string;
  status: string;
  phone: number;
  email: string;
}

export interface Person {
  name: string;
}

export interface AppState {
  logged: boolean;
  user?: Person;
}

export type AppAction = { type: 'login'; payload: Person } | { type: 'logout' };
