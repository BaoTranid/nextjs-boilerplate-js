import { COMMON } from '@/core/services/actionTypes';

const initialState = {
  commonData: 'Test redux',
};

const common = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMMON:
      return {
        ...state,
        commonData: payload.data,
      };
    default:
      return state;
  }
};

export default common;
