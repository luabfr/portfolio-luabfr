"use client"
import React,{ useState } from "react";
import useApiMeLiItemById from "./useApiMeLiItemById";
import Layout from "antd/es/layout";
import { Space,Typography,Button,Flex,Input,Image } from 'antd';

const { Text,Title } = Typography;


const formatPrice = (price,currency_id) => {
	return new Intl.NumberFormat('es-AR',{
		style: 'currency',
		currency: currency_id
	}).format(price);
};


const Page = ({ params })=>{
	const { itemData,loading,error } = useApiMeLiItemById(params.id);
	if (loading) {
		return <div>Cargando...</div>;
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}
	const arrayDeResultados = itemData
	console.log('itemData',itemData)


	return (
		<Flex vertical>
			<Title level={4}>Product ID: {params.id} </Title>
			<Flex vertical>
				<Text>{itemData.title}</Text>
				<Title level={4}>{formatPrice(itemData.base_price,itemData.currency_id)}</Title>
				<Text>{(itemData.condition == "new") ? "Nuevo" : "Usado"}  {" - Unidades vendidas: "}{itemData.sold_quantity}</Text>
				<Image
					alt={itemData.title}
					width={200}
					src={itemData.thumbnail}
				/>
				
			</Flex>
		</Flex>
	)
}



export default Page