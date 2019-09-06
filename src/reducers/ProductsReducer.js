import { LOADED, LOADING_PRODUCT_DETAILS } from '../actions/constants'

function getReviewIds(product){

}

//define reducers
const ProductsReducer = (curState = {}, action) => {
    let newState;

    switch (action.type) {
        case LOADED:
            newState = {...curState}
            action.payload.products.forEach(
                item => {
                    newState[item.id] = item
                }
            );
            break;
        case LOADING_PRODUCT_DETAILS: newState = { ...curState, productDetailStatus: LOADING_PRODUCT_DETAILS }; break;
        case LOADED_PRODUCT_DETAILS: 
            const { review, ...productDetails } = action.payload.product
            newState = {...curState, [productDetails.id]: productDetails, reviews: getReviewIds()}    
            break;
        case ERROR_PRODUCT_DETAILS:  newState = { ...curState, productDetailStatus: ERROR_PRODUCT_DETAILS }; break;
        default: newState = curState; break;
    }

    return newState;
}
export default ProductsReducer;