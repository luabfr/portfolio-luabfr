import React,{ FC,useEffect } from 'react';
import { Label,StyledSelect } from '../CustomStyledComponents/CustomStyledComponents';
import { useDispatch,useSelector } from 'react-redux';
import { getRatesFromAPI,selectedOption } from '@/app/store/reducers'; // Importa la acción desde el slice correspondiente


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


	console.log('optionsInArray', optionsInArray)
	const handleSelectChange = (updateSelectedOption) => {
		dispatch(selectedOption(updateSelectedOption.value));
	};


	return (
		<div>
			<Label>{label}</Label>
			<StyledSelect
				options={optionsInArray}
				// onChange={handleSelectChange}
				defaultValue={'USD'} 
			/> 
		</div>
	);
}


export default InputSelect