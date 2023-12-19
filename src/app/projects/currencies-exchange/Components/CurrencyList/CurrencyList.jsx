"use client"
import React,{ useEffect,useState,FC } from 'react'
import { UlCurrency,LiCurrecy,StationFlag,StationName,StationAmount } from '../CustomStyledComponents/CustomStyledComponents';
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getRatesFromAPI } from '@/app/store/currenciesExchangeReducer';
import Image from 'next/image';
import {currencyToFlag} from "./CurrencyFlags.jsx"

const CurrencyList = ({ sliceLength }) => {

	const dateFrom = useSelector((state) => state.currenciesExchange.dateFrom);
	const dataCurrency = useSelector((state) =>  state.currenciesExchange.currenciesRatesByBaseAndDate );
	
	const firstValue = Object.values(dataCurrency)[0];
	
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
				<Image 
					src={`https://flagcdn.com/w40/${currencyToFlag[key]}.png`} 
					alt={key } 
					width={40} 
					height={40}/>
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