const initialState = {
  exampleData: 'Test redux example',
};

const example = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'EXAMPLE':
      return {
        ...state,
        exampleData: payload.data,
      };
    default:
      return state;
  }
};

export default example;
