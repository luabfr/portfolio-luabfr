"use client"
import { useDispatch } from 'react-redux';
import { getSymbolsFromAPI } from '@/app/store/currenciesExchangeReducer';
import { useEffect } from 'react';
import { currencyToFlag } from './CurrencyList/CurrencyFlags.jsx';

const SetupStates = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const symbolsList = { currenciesList: Object.keys(currencyToFlag).join(',') };
		dispatch(getSymbolsFromAPI(symbolsList));
		console.log('Setup States: ok');
	},[dispatch]);

	return null;
};

export default SetupStates;
