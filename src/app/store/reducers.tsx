import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { freeApiKey, freeApiURL } from '../projects/currencies-exchange/Components/hooks/useAPIKey';

const initialState = {
	value: 0,
	currenciesList: {},
	currenciesRatesByBaseAndDate: {},
	optionSelected: 'USD',
	dateFrom: '2021-12-01',
	dateTo: '2021-12-01',
};

export const getSymbolsFromAPI = createAsyncThunk(
	'currenciesExchange/symbols',
	async (payload: any) => {
		const response = await fetch(`${freeApiURL}latest?${freeApiKey}&currencies=${payload.currenciesList}`);
		const data = await response.json();
		return data.data;
	}
);

export const getRatesFromAPI = createAsyncThunk(
	'currenciesExchange/rates',
	async (payload: any) => {
		const response = await fetch(`${freeApiURL}historical?${freeApiKey}&currencies=${payload.currenciesList}&base_currency=${payload.currencyBase}&date_from=${payload.dateFrom}T00%3A00%3A00.000Z&date_to=${payload.dateTo}T00%3A00%3A00.000Z`);
		const data = await response.json();
		return data.data;
	}
);

const currenciesExchangeSlice = createSlice({
	name: 'currenciesExchange',
	initialState,
	reducers: {
		sumar(state) {
			state.value += 5;
		},
		restar(state) {
			state.value -= 5;
		},
		selectedOption(state, action) {
			state.optionSelected = action.payload;
		},
		updateDateFrom(state, action) {
			state.dateFrom = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSymbolsFromAPI.fulfilled, (state, action) => {
				state.currenciesList = action.payload;
			})
			.addCase(getSymbolsFromAPI.rejected, (state, action) => {
				state.currenciesList = action.error;
			})
			.addCase(getRatesFromAPI.fulfilled, (state, action) => {
				state.currenciesRatesByBaseAndDate = action.payload;
			})
			.addCase(getRatesFromAPI.rejected, (state, action) => {
				state.currenciesRatesByBaseAndDate = action.error;
			});
	},
});

export const {
	sumar,
	restar,
	selectedOption,
	updateDateFrom,
} = currenciesExchangeSlice.actions;

export const selectCurrentValue = (state: any) => state.currenciesExchange.value;

export default currenciesExchangeSlice.reducer;
