import ProductsList from '../components/ProductsList';
import { loadedAC } from '../actions/creators';
import {connect} from 'react-redux'

//returned obj's properties are passed down as prop={value}
const mapStateToProps = ( state ) => ({
    products: Object.values(state.products)
})
const mapDispatchToProps = ( dispatch ) => {
    return {
        loadedProducts: (products) => {
            dispatch(loadedAC(products))
        }
    }
}
export const ProductsListContainer = connect( mapStateToProps, mapDispatchToProps )( ProductsList );