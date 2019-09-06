import { LOADED, LOADED_PRODUCT_DETAILS } from '../actions/constants'

//define reducers
const ReviewReducer = (curState = {}, action) => {
    let newState;

    switch (action.type) {

        case LOADED_PRODUCT_DETAILS:

            newState = {
                ...curState
            }
            action.payload.product.reviews.forEach(
                item => {
                    newState[item.id] = item
                });
            break;

        default: newState = curState; break;
    }

    return newState;
}
export default ReviewReducer;