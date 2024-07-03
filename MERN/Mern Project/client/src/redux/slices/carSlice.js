// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';



export const initialState = {
    carData: {},
    userCars: [],
};

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.carData = action.payload
        },
        setUserCars: (state, action) => {
            state.userCars = action.payload
        },
        updateUserCars: (state, action) => {
            const car = action.payload
            const index = state.userCars.findIndex((c) => c._id === car._id)

            if (index !== -1) {
                state.updateUserCars = [...state.userCars];
                updateUserCars[index] = car;
                state.userCars[index] = updateUserCars[index];
            }

        },
    },
});

export const { setCar, setUserCars, updateUserCars } = carSlice.actions;
export const selectCar = (state) => state.car.carData;
export const selectUserCars = (state) => state.car.userCars;


export default carSlice.reducer;
