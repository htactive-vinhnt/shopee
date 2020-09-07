import fb from './firebase';

export const getCard = (userID) => {
    return(
        fb.database().ref('users').child(userID).child('card').on('value')
    )
}

export const addToCard = (userID)=>{
    return(
        fb.database().ref('users').child(userID).child('cart')
    )
}