import { LOADED, LOADING_PRODUCT_DETAILS, LOADED_PRODUCT_DETAILS, ERROR_PRODUCT_DETAILS } from '../actions/constants';

//action creators
const loadedAC = (products) => ({
    type: LOADED,
    payload: {
        products:products
    }
});
const loadingProductDetailsAC = () => ({
    type: LOADING_PRODUCT_DETAILS
});
const loadedProductDetailsAC = (product) => ({
    type: LOADED_PRODUCT_DETAILS,
    payload: {
        product:product
    }
});
const errorProductDetailsAC = (products) => ({
    type: ERROR_PRODUCT_DETAILS
});
export {
    loadedAC
}