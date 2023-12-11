
import { configureStore } from '@reduxjs/toolkit';
import currenciesExchangeReducer from './reducers'; // Importa tu slice

const store = configureStore({
	reducer: {
		currenciesExchange: currenciesExchangeReducer,
		// Puedes agregar otros slices aquí si tienes más de uno
		// OtrosSlices: OtrosReducers
	},
	// Otras configuraciones o middlewares si es necesario
});

export default store;
