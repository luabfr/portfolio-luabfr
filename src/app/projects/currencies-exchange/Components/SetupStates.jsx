"use client"
import { useDispatch } from 'react-redux';
import { getSymbolsFromAPI } from '@/app/store/currenciesExchangeReducer';
import { useEffect } from 'react';

const SetupStates = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const symbolsList = { currenciesList: '' };
		dispatch(getSymbolsFromAPI(symbolsList));
		console.log('Setup States: ok');
	},[dispatch]);

	return null;
};

export default SetupStates;