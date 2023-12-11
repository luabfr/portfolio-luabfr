import React, {FC} from 'react'
import { Label , StyledSelect } from '../CustomStyledComponents/CustomStyledComponents'
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getRatesFromAPI } from '@/app/store/reducers';

import Select from 'react-select'


// El select debe recibir la OPTIONS con el siguiente formato:
// const myOptions = [
// 	{ value: '1',label: 'Option 1' },
// 	{ value: '2',label: 'Option 2' },
// 	{ value: '3',label: 'Option 3' },
// ]
interface RootState {
	currenciesExchange: {
		dateFrom: string, // Especifica el tipo de dato de dateFrom
		dateTo: string,
		optionSelected: string,
		currenciesList: {}
	};
}

type GetRatesFromAPI = (dateAndRate: {}) => void

type Props = {
	selectOptions: [],
	label: string,
	getRatesFromAPI: GetRatesFromAPI
}

const InputSelect: FC<Props> = ({ selectOptions,label, getRatesFromAPI }) => {
	const dispatch = useDispatch();

	const dateFrom: string = useSelector( (state: RootState) => {	return state.currenciesExchange.dateFrom	});
	const dateTo: string = useSelector((state: RootState) => {	return state.currenciesExchange.dateTo	});
	const optionSelected: string = useSelector((state: RootState) => { return state.currenciesExchange.optionSelected });

	// 1 - me subscribo a state que contiene la lista de Monedas para obtener sus datos, y luego lo transformo en un array ["USD","CAD", "etc"] 
	const options = useSelector((state: RootState) => {
		return Object.keys(state.currenciesExchange.currenciesList)
	});
	// 2 - transformo el array a un nuevo array de objetos
	// const optionsInArray = Object.keys(options).map(clave => ({ label: options[clave],value: options[clave] })); 
	const optionsInArray: Array<{ label: string, value: string }> = options.map(clave => ({ label: clave, value: clave }));



	const updateRequest =()=>{
		const dateAndRate = {
			currencyBase: `${optionSelected}`,
			currenciesList: `${options}`, // esto no esta bien
			dateFrom: `${dateFrom}`,
			dateTo: `${dateTo}`,
		}
		getRatesFromAPI(dateAndRate)		
	}

	const handleSelectChange = (selectedOption: { value: string}) => {
		dispatch({
			type: "SELECTED_OPTION",
			payload: selectedOption.value
		});
		
		updateRequest()
		
	};




	return (
		<div>
			<Label>{label}</Label>
			<StyledSelect
				options={optionsInArray}				
				onChange={handleSelectChange}
				defaultValue={"USD"}
				// value={}
			/>
		</div>
		)
}


export default connect(null,{ getRatesFromAPI })(InputSelect)