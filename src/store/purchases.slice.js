import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './loading.slice';
import axios from 'axios';
import getConfig from '../utilities/getConfig';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchaseSlice = createSlice({
	name: 'purchases',
    initialState: [],
    reducers: {
            setPurchase: (state, action)=>{
                return action.payload
            }
    }
})

export const getPurchaseThunk = () => dispatch =>{
    dispatch(setIsLoading(true));
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/purchases`, getConfig())
    .then(res => dispatch(setPurchase(res.data)))
    .finally(()=> dispatch(setIsLoading(false)));
}



export const { setPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;