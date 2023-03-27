import { configureStore } from '@reduxjs/toolkit'
import  cartshopSlice  from './cart.slice'
import loadingSlice from './loading.slice'
import productsSlice from './products.slice'
import purchaseSlice from './purchases.slice'

export default configureStore({
  reducer: {
        products: productsSlice,
        loading: loadingSlice,
        purchases: purchaseSlice,
        cartshop: cartshopSlice
	}
})