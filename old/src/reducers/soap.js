import * as ActionTypes from '../actions';

const defaultState = {
  games: {},
};

const soap = (state = defaultState, action = {}) => {
  if (!state) {
    return defaultState;
  }

  if (!action) {
    return state;
  }

  const { type } = action;

  return state;
}

export default soap;
