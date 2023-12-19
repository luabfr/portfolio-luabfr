import { createSlice } from '@reduxjs/toolkit';



const initialState = {
	value: 0,
	inView: "home",
	projectInView: "MarketFinder",
	isMenuOpen: false,
};

const uiStates = createSlice({
	name: 'uiStates',
	initialState,
	reducers: {
		sumar(state) {
			state.value += 5;
		},
		updateView(state, action){
			state.inView = action.payload;
		},
		updateIsMenuOpen(state, action) {
			state.isMenuOpen = action.payload;
		},
		updateProjectInView(state, action) {
			state.projectInView = action.payload;
		},
		
	},
});

export const { 
	sumar, 
	updateView, 
	updateIsMenuOpen,
	updateProjectInView
} = uiStates.actions;

export default uiStates.reducer;
