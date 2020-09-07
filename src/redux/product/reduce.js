import * as types from './types';

const initialState = {
    products: [],
    product: [],
    error: [],
    loading: false,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case types.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case types.GET_ALL_PRODUCT_FLASED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
            case types.GET_PRODUCT_BY_ID:
                return {
                  ...state,
                  loading: true,
                };
              case types.GET_PRODUCT_BY_ID_SUCCESS:
               
                return {
                  ...state,
                  loading: false,
                  product: action.payload,
                };
              case types.GET_PRODUCT_BY_ID_FLASED:
                return {
                  ...state,
                  loading: false,
                  error: action.error,
                };
              
                case types.UPDATE_INFO_ADMIN_DOING:
                  console.log('reduce log doing')
                  return {
                    ...state,
                    loading: true,
                    adminInfo: action.payload
                  };
                case types.UPDATE_INFO_ADMIN_SUCCESS:
                  console.log('reduce log success', action.payload);
                  return {
                    ...state,
                    loading: false,
                    adminInfo: action.payload,
                  };
                case types.UPDATE_INFO_ADMIN_FAILED:
                  return {
                    ...state,
                    loading: false,
                    error: action.error,
                  };
        default:
            return state;
    }
};

export default productReducer;