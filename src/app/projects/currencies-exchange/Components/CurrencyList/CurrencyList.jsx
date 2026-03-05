"use client"
import React from 'react'
import { UlCurrency,LiCurrecy,StationFlag,StationName,StationAmount } from '../CustomStyledComponents/CustomStyledComponents';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import {currencyToFlag} from "./CurrencyFlags.jsx"

const CurrencyList = ({ sliceLength }) => {

	const dataCurrency = useSelector((state) => state.currenciesExchange?.currenciesRatesByBaseAndDate);
	const safeDataCurrency = dataCurrency && typeof dataCurrency === 'object' ? dataCurrency : {};
	const firstValue = Object.values(safeDataCurrency)[0] ?? {};
	
	for (const property in firstValue) {
		if (Object.prototype.hasOwnProperty.call(firstValue,property)) { // TS no labura bien con for...in . Esto es necesario por TS
			// console.log(`${property}: ${firstValue[property]}`);
		}
	}


	let conversion = firstValue
	if (conversion == undefined) {
		conversion = {}
	}
	const keys = Object.keys(conversion);
	

	const order = { "EUR": 1,"USD": 2,"CAD": 3,"GBP": 4 };
	keys.sort((a,b) => {
		const orderA = order[a];
		const orderB = order[b];
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
	const keysSliced = keys.slice(0,sliceLength);
	

	const items = keysSliced.map((key) => (
		<LiCurrecy key={key}>
			<StationFlag>				
				{currencyToFlag[key] ? (
					<Image
						src={`https://flagcdn.com/w40/${currencyToFlag[key]}.png`}
						alt={key}
						width={40}
						height={40}
					/>
				) : (
					<span>{key}</span>
				)}
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



export default CurrencyList
