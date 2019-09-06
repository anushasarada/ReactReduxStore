import ProductsReducer from '../reducers/ProductsReducer'
//import profileFormReducer from '../reducers/ProfileFormReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
/* import logger1 from '../middleware/logger1'
import logger2 from '../middleware/logger2' */
import thunk from 'redux-thunk'

function getStore() {
    //createStore accepts only 1 reducers
    return createStore(
        /* combinedReducer */
        combineReducers(
            {
                products: ProductsReducer,
                //profileForm: profileFormReducer
            }
        ),
        applyMiddleware(thunk)
    )
}

export default getStore;