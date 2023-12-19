
import { configureStore } from '@reduxjs/toolkit';
import currenciesExchangeReducer from './currenciesExchangeReducer'; // Importa tu slice
import uiStates from './uiStates'; // Importa tu slice

const store = configureStore({
	reducer: {
		currenciesExchange: currenciesExchangeReducer,
		uiStates: uiStates,
		// Puedes agregar otros slices aquí si tienes más de uno
		// OtrosSlices: OtrosReducers
	},
	// Otras configuraciones o middlewares si es necesario
});

export default store;
