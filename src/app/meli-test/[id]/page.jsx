"use client"
import React,{ useState } from "react";
import useApiMeLiItemById from "./useApiMeLiItemById";
import Layout from "antd/es/layout";
import { Space,Typography,Button,Flex,Input,Image,Spin } from 'antd';

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
		return (
			<Layout style={{ width: "100%",minHeight: "100vh",display: 'flex',alignItems: 'center',justifyContent: "center" }}>
				<Spin size="large" />
			</Layout>
		)
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}
	const arrayDeResultados = itemData
	console.log('itemData',itemData)


	return (
		<Layout style={{ width: "100%", minHeight: "100vh", display: 'flex',alignItems: 'center',}}>
			<Layout style={{ width: "66%", display: 'flex', alignItems: 'center', background:"white"}}>

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
						<Flex>
							{itemData.pictures.map((item,index) => (
								<Flex key={index}>
									<Image
										alt={item.title}
										width={100}
										src={item.url}
									/>
								</Flex>
							))}	
						</Flex>
					</Flex>
				</Flex>

			</Layout>
		</Layout>
	)
}



export default Page