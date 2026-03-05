"use client"
import React, { useEffect, useMemo } from 'react';
import { Label, StyledSelect } from '../CustomStyledComponents/CustomStyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { getRatesFromAPI, selectedOption } from '@/app/store/currenciesExchangeReducer';
import { currencyToFlag } from '../CurrencyList/CurrencyFlags.jsx';

const FALLBACK_CURRENCIES = Object.keys(currencyToFlag);

const InputSelect = ({ label }) => {
	const dispatch = useDispatch();

	const dateFrom = useSelector((state) => state.currenciesExchange.dateFrom);
	const dateTo = useSelector((state) => state.currenciesExchange.dateTo);
	const optionSelected = useSelector((state) => state.currenciesExchange.optionSelected);
	const currenciesList = useSelector((state) => state.currenciesExchange.currenciesList);

	const options = useMemo(() => {
		const keys = Object.keys(currenciesList ?? {});
		return keys.length ? keys : FALLBACK_CURRENCIES;
	}, [currenciesList]);
	const optionsInArray = options.map((key) => ({
		label: key,
		value: key,
	}));
	const currenciesListCsv = useMemo(() => options.join(','), [options]);

	const order = { EUR: 1, USD: 2, CAD: 3, GBP: 4 };
	optionsInArray.sort((a, b) => {
		const orderA = order[a.value];
		const orderB = order[b.value];

		if (orderA !== undefined && orderB !== undefined) {
			return orderA - orderB;
		}
		if (orderA !== undefined) {
			return -1;
		}
		if (orderB !== undefined) {
			return 1;
		}
		return 0;
	});

	const handleSelectChange = (updateSelectedOption) => {
		dispatch(selectedOption(updateSelectedOption.value));
	};

	useEffect(() => {
		if (!currenciesListCsv || !optionSelected || !dateFrom || !dateTo) {
			return;
		}
		dispatch(getRatesFromAPI({
			currencyBase: optionSelected,
			currenciesList: currenciesListCsv,
			dateFrom,
			dateTo,
		}));
	}, [dispatch, optionSelected, currenciesListCsv, dateFrom, dateTo]);

	return (
		<div>
			<Label>{label}</Label>
			<StyledSelect
				instanceId="currency-base-select"
				inputId="currency-base-select-input"
				options={optionsInArray}
				onChange={handleSelectChange}
				value={optionsInArray.find((opt) => opt.value === optionSelected) ?? null}
			/>
		</div>
	);
};

export default InputSelect;
