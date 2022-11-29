import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const loadingSlice = createSlice({
	name: 'loading',
    initialState: false,
    reducers: {
            setIsLoading: (state, action)=>{
                return action.payload
            }
    }
})

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;