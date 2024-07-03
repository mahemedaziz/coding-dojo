import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebar: JSON.parse(localStorage.getItem('sidebar')) || false, // Initialiser à partir du localStorage
    modal: false,
    type: "add",
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        triggerSidebar: (state) => {
            state.sidebar = !state.sidebar;
            localStorage.setItem('sidebar', JSON.stringify(state.sidebar)); // Enregistrer dans le localStorage
        },
        closeSidebar: (state) => {
            state.sidebar = false;
            localStorage.setItem('sidebar', JSON.stringify(state.sidebar)); // Enregistrer dans le localStorage
        },
        openSidebar: (state) => {
            state.sidebar = true;
            localStorage.setItem('sidebar', JSON.stringify(state.sidebar)); // Enregistrer dans le localStorage
        },
        triggerModal: (state) => {
            state.modal = !state.modal;
        },
        closeModal: (state) => {
            state.modal = false;
        },
        openModal: (state) => {
            state.modal = true;
        },
        setType: (state, action) => {
            state.type = action.payload
        },
        resetFormType: (state) => {
            state.type = "add"; // Réinitialiser le type à "add"
        },
    },
});

export const { triggerSidebar, openSidebar, closeSidebar, triggerModal, closeModal, openModal, setType, resetFormType } = uiSlice.actions;
export const selectSidebar = (state) => state.ui.sidebar;
export const selectModal = (state) => state.ui.modal;
export const selectType = (state) => state.ui.type;
export default uiSlice.reducer;
