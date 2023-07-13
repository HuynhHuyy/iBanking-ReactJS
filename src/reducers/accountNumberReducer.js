import * as actionTypes from '../actions';

const initialState = {
  accountNumberSet: false,
  data: null
};

const accountNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_NUMBER_CREATE: {
      return {
        ...initialState,
        accountNumberSet: true,
        data: action.payload
      };
    }

    case actionTypes.ACCOUNT_NUMBER_DELETE: {
      return {
        data: null,
        accountNumberSet: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default accountNumberReducer;
