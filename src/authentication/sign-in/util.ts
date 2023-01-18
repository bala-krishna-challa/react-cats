import { USER_NOT_FOUND_EXCEPTION } from './constants';

export const getErrorByCode = (code: string) => {
  switch (code) {
    case USER_NOT_FOUND_EXCEPTION:
      return 'Invalid credentials';
    default:
      return 'Something went wrong. Please login again!';
  }
};
