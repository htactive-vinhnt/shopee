import * as types from "./types";

const initialState = {
  userID: [],
  cards: [],
  item: [],
  error: [],
  loading: false,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ORDER_OF_USER:
      return {
        ...state,
        loading: true,
        userID: action.payload
      };
    case types.GET_ALL_ORDER_OF_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };
    case types.GET_ALL_ORDER_OF_USER_FALSED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.ADD_TO_CART_OF_USER:
      return {
        ...state,
        loading: true,
        userID: action.payload.userID,
        item: action.payload.productID,
      };
    case types.ADD_TO_CART_OF_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
      };
    case types.ADD_TO_CART_OF_USER_FALSED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default cardReducer;
