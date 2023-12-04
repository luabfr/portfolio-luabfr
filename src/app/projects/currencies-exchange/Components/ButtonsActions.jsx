import React from 'react'
import { connect } from 'react-redux';
import { getSymbolsFromAPI,getRatesFromAPI } from './store/test/actions';
import { Button } from './CustomStyledComponents/CustomStyledComponents';
import InputSelect from './InputSelect/InputSelect';
import MyDatePicker from './MyDatePicker/MyDatePicker';

const mapStateToProps = ( state ) => {
	return {
		currenciesRatesByBaseAndDate: state.testReducer.currenciesRatesByBaseAndDate
	}
}


const ButtonsActions = ({ getSymbolsFromAPI,getRatesFromAPI,currenciesRatesByBaseAndDate })=>{
	const symbolsList = { currenciesList: "EUR,CAD,USD"}
	const dateAndRate = {
		currencyBase: "JPY",
		currenciesList: "EUR,CAD,USD",
		dateFrom: "2021-12-01", 
		dateTo: "2021-12-01", 
	}



	return (
		<>
			<InputSelect label={"Moneda de Referencia"}/>
			{/* <MyDatePicker label={"Fecha de conversión"}/> */}
			

			<div>
				<Button  onClick={() => getSymbolsFromAPI(symbolsList)} secondary>
					obtener Symbols
				</Button >
				<Button onClick={() => getRatesFromAPI(dateAndRate)} secondary>
					obtener valores en base a moneda de referencia y fecha
				</Button >
			</div>
			
		</>
	)
}

//connect( { rescata data del store },{ envia data al store } )
export default connect(mapStateToProps,{ getSymbolsFromAPI,getRatesFromAPI })(ButtonsActions)