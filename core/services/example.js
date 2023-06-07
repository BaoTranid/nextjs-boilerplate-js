import { COMMON } from './actionTypes';

export const loadApi = () => dispatch => {
  return dispatch({
    type: COMMON,
    payload: {
      request: {
        url: '/api/hello',
      },
    },
  });
};

export const getExample = data => dispatch => {
  return dispatch({
    type: 'EXAMPLE',
    payload: {
      data: data,
    },
  });
};
