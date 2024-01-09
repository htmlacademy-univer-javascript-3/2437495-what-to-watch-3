import { store } from '../store';
import { setError } from '../store/actions';

export const errorHandler = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(() => store.dispatch(setError(null)), 3000);
};
