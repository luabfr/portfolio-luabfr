"use client"
import React,{ FC,useEffect } from 'react';
import { Label,StyledSelect } from '../CustomStyledComponents/CustomStyledComponents';
import { useDispatch,useSelector } from 'react-redux';
import { getRatesFromAPI,selectedOption } from '@/app/store/currenciesExchangeReducer'; 



const InputSelect = ({ selectOptions,label }) => {

	const dispatch = useDispatch();

	const dateFrom = useSelector((state) => state.currenciesExchange.dateFrom);
	const dateTo = useSelector((state) => state.currenciesExchange.dateTo);
	const optionSelected = useSelector((state) => state.currenciesExchange.optionSelected);
	const currenciesList = useSelector((state) => state.currenciesExchange.currenciesList);

	const options = Object.keys(currenciesList);
	const optionsInArray = options.map((key) => ({
		label: key,
		value: key,
	}));


	// console.log('optionsInArray', optionsInArray)


	const order = { "EUR": 1,"USD": 2,"CAD": 3,"GBP": 4 };



	optionsInArray.sort((a,b) => {
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

	// console.log("optionsInArray orden: ", optionsInArray);


	const updateRequest = () => {
		const dateAndRate = {
			currencyBase: optionSelected,
			currenciesList: options.join(','), // Corregir la forma en que se están pasando las currenciesList
			dateFrom,
			dateTo,
		};
		dispatch(getRatesFromAPI(dateAndRate)); // Llama a la acción creada con createAsyncThunk
	};

	const handleSelectChange = (updateSelectedOption) => {
		// console.log('updateSelectedOption.value', updateSelectedOption.value)
		dispatch(selectedOption(updateSelectedOption.value));

		updateRequest();
	};

	

	useEffect(() => {
		updateRequest(); // Realiza la primera llamada al montar el componente o cuando cambian las dependencias
	},[dateFrom,dateTo,optionSelected,dispatch]);



	

	return (
		<div>
			<Label>{label}</Label>
			<StyledSelect
				options={optionsInArray}
				onChange={handleSelectChange}
				defaultValue={"USD"}
			/>
		</div>
	);
};

export default InputSelect;
