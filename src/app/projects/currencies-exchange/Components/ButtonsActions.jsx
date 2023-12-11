"use client"
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSymbolsFromAPI,getRatesFromAPI } from '@/app/store/reducers';
import { Button } from './CustomStyledComponents/CustomStyledComponents';
import InputSelect from './InputSelect/InputSelect.ia.jsx';
import MyDatePicker from './MyDatePicker/MyDatePicker';

const ButtonsActions = () => {
	const dispatch = useDispatch();
	const currenciesRatesByBaseAndDate = useSelector((state) => state.currenciesExchange.currenciesRatesByBaseAndDate);

	// useEffect(() => {
	// 	// Ejemplo de carga inicial de símbolos
	// 	const symbolsList = { currenciesList: 'EUR,CAD,USD' };
	// 	dispatch(getSymbolsFromAPI(symbolsList));
	// },[dispatch]);

	// const handleGetRates = () => {
	// 	const dateAndRate = {
	// 		currencyBase: 'JPY',
	// 		currenciesList: 'EUR,CAD,USD',
	// 		dateFrom: '2021-12-01',
	// 		dateTo: '2021-12-01',
	// 	};
	// 	dispatch(getRatesFromAPI(dateAndRate));
	// };

	return (
		<>

			{/* Select */}
			<InputSelect label={'Moneda de Referencia'} />


			{/* <MyDatePicker label={'Fecha de conversión'} /> */}

			{/* <div>
				<Button onClick={() => dispatch(getSymbolsFromAPI({ currenciesList: 'EUR,CAD,USD' }))} >
					obtener Symbols
				</Button>
				<Button onClick={handleGetRates} >
					obtener valores en base a moneda de referencia y fecha
				</Button>
			</div> */}
		</>
	);
};

export default ButtonsActions;
