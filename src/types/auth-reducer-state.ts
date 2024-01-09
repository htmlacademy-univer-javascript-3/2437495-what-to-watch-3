import { User } from '../types/user';

export interface AuthReducerState {
  user: User | null;
  authorizationStatus: string;
}
