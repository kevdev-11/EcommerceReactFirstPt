import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../utilities/getConfig';
import { setIsLoading } from './loading.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartshopSlice = createSlice({
	name: 'cartshop',
    initialState: [],
    reducers: {
            setCart: (state, action)=>{
                return action.payload
            }
    }
})

export const getCartThunk = () => dispatch =>{
    dispatch(setIsLoading(true));
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
    .then(res => dispatch(setCart(res.data.data.cart.products)))
    .finally(()=> dispatch(setIsLoading(false)));
}

export const getSettingThunk = (listCart) => dispatch =>{
    dispatch(setIsLoading(true));
    axios.post(`https://e-commerce-api.academlo.tech/api/v1/cart`, listCart , getConfig())
    .then(() => dispatch(getCartThunk()))
    .finally(()=> dispatch(setIsLoading(false)));
}

export const getCheckoutThunk = () => dispatch =>{
    dispatch(setIsLoading(true));
    axios.post(`https://e-commerce-api.academlo.tech/api/v1/purchases`,{}, getConfig())
    .then(() => dispatch(setCart([])))
    .finally(()=> dispatch(setIsLoading(false)));
}

export const { setCart } = cartshopSlice.actions;

export default cartshopSlice.reducer;