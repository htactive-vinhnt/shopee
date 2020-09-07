import * as  types from './types';

//get all cart item

export function getCardUserDoing (userID){
    return{
        type: types.GET_CART_OF_USER,
        payload: userID
    }
}

export function getCardUserSuccess(data){
    return{
        type: types.GET_CART_OF_USER_SUCCESS,
        payload: data
    }
}

export function getCardUserFalsed(error){
    return{
        type: types.GET_CART_OF_USER_FALSED,
        error: error,
    }
}
// update card item

export function addToCardDoing (userID, productID){
    return{
        type: types.ADD_TO_CART_OF_USER,
        payload: {
            userID,
            productID
        }
    }
}

export function addToCardSuccess(data){
    return{
        type: types.ADD_TO_CART_OF_USER_SUCCESS,
        payload: data
    }
}

export function addToCardFalsed(error){
    return{
        type: types.ADD_TO_CART_OF_USER_FALSED,
        error: error,
    }
}