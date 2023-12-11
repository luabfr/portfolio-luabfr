"use client"
import React,{ useEffect , useState , FC }from 'react'
import { UlCurrency,LiCurrecy,StationFlag,StationName,StationAmount } from '../CustomStyledComponents/CustomStyledComponents';
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getRatesFromAPI } from '@/app/store/reducers';
import Image from 'next/image';

interface RootState {
	currenciesExchange: {
		dateFrom: string; // Especifica el tipo de dato de dateFrom
		currenciesRatesByBaseAndDate: {}
	};
}

interface CurrencyData {
	[date: string]: {};
}

const CurrencyList: FC = ({ }) => {
	
	const dateFrom: string = useSelector( (state: RootState) => { return state.currenciesExchange.dateFrom });
	const dataCurrency: CurrencyData = useSelector((state: RootState ) => { return state.currenciesExchange.currenciesRatesByBaseAndDate });
	console.log("dataCurrency[dateFrom]",dataCurrency[dateFrom])

	const dataCurrencyOK: CurrencyData = dataCurrency[dateFrom]

	/*for (const property in dataCurrencyOK) {
		if (Object.prototype.hasOwnProperty.call(dataCurrencyOK, property)) { // TS no labura bien con for...in . Esto es necesario por TS
			console.log(`${property}: ${dataCurrencyOK[property]}`);
		}
	}*/

	
	let conversion = dataCurrencyOK
	if (conversion == undefined){
		conversion = {}
	}
	const keys = Object.keys(conversion);

	const items = keys.map((key:string ) => (
		<LiCurrecy key={key}>
			{/* {key}: {conversion[key]} */}
			<StationFlag>
				<Image src={"https://flagcdn.com/w40/za.png"} alt={key} /> 
			</StationFlag>
			<StationName>{key}</StationName>
			<StationAmount>{conversion[key]}</StationAmount>

			
		</LiCurrecy >
	));

	return (
		<UlCurrency >		
				{items}
		</UlCurrency>
	)
};


export default connect(null,{ getRatesFromAPI })(CurrencyList)