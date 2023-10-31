"use client"
import React,{ useState }from "react";
import useApiMeli from "./useApiMeLi"
import Layout from "antd/es/layout";
import { Space,Typography,Button,Flex,Input,Image } from 'antd';
import Link from "next/link";

const { Search } = Input;
const { Text,Title } = Typography;


const formatPrice = (price,currency_id) => {
	return new Intl.NumberFormat('es-AR',{
		style: 'currency',
		currency: currency_id
	}).format(price);
};


const MeliTest =()=>{
	const [inputSearchValue,setInputSearchValue] = useState("iphone")
	const onSearch = (value,_e,info) => {
		setInputSearchValue(value)
	};

	const { data,loading,error } = useApiMeli(inputSearchValue);
	if (loading) {
		return <div>Cargando...</div>;
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}
	

	// LOG de la respuesta
	const arrayDeResultados = data.results
	console.log('data.results',data.results)



	


	return(
		<Layout>
			<h1>esto es <strong>meli-test/page.jsx</strong></h1>
			<Search
				placeholder="input search text laf"
				allowClear
				enterButton="Search"
				size="large"
				onSearch={onSearch}
			/>
			<Flex align="start" vertical>				
				{arrayDeResultados.map((item,index) => (
					<Flex key={index} >
						<Link href={`/meli-test/${item.id}`} >
							<Flex>
								<Image
									alt={item.title}
									width={100}
									src={item.thumbnail}
								/>

								<Flex align="start" vertical>
									<Title level={4}>{formatPrice(item.price,item.currency_id)}</Title>
									<Text >{item.title}</Text>
									<Text >{item.id}</Text>
									{/* MLA1117980186 */}
								</Flex>
							</Flex>
						</Link>

					</Flex>
				))}				
			</Flex>
		</Layout>
	)
}

export default MeliTest