// export * from './games';
import * as action from '../constants';

export function nullAction() {
  return { type: action.NULL_ACTION };
};
