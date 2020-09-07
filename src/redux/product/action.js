import * as types from './types';

export function getAllproduct () {
    return{
        type: types.GET_ALL_PRODUCT
    }
}

export function getAllproductSuccess (data) {
    return{
        type: types.GET_ALL_PRODUCT_SUCCESS,
        payload: data
    }
}

export function getAllproductFalsed (error) {
    return{
        type: types.GET_ALL_PRODUCT_FLASED,
        error: error
    }
}
