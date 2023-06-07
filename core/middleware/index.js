import axios from 'axios';

export const apiClients = {
  default: {
    client: axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: -1,
      },
      transformResponse: data => {
        return data;
      },
    }),
  },
};

export const middlewareConfig = {
  interceptors: {
    request: [
      {
        success: function ({ getState, dispatch, getSourceAction }, req) {
          req.headers.roleId = '99999';
          return req;
        },
        error: function ({ getState, dispatch, getSourceAction }, error) {
          return error;
        },
      },
    ],
    response: [
      {
        success: function ({ getState, dispatch, getSourceAction }, req) {
          return req;
        },
        error: function ({ getState, dispatch, getSourceAction }, error) {
          return error;
        },
      },
    ],
  },
  onSuccess: ({ action, next, response }, options) => {
    const nextAction = {
      type: action?.type,
      payload: response,
      meta: {
        previousAction: action,
      },
    };
    next(nextAction);
    return nextAction;
  },
  onError: ({ action, next, error, dispatch }, options) => {
    const nextAction = {
      type: action?.type,
      error: error,
      meta: {
        previousAction: action,
      },
    };

    next(nextAction);
    return nextAction;
  },
};
