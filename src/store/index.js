import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loading.slice'
import productsSlice from './products.slice'

export default configureStore({
  reducer: {
        products: productsSlice,
        loading: loadingSlice
	}
})