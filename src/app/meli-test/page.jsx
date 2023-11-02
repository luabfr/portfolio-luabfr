"use client"
import React,{ useState }from "react";
import useApiMeli from "./useApiMeLi"
import Layout from "antd/es/layout";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space,Typography,Button,Flex,Input,Image,Pagination,Card,FloatButton,Spin,Breadcrumb } from 'antd';
import Link from "next/link";
import AboutProject from "./AboutProject"

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
	const [pagination,setPagination] = useState(1)
	
	// Search
	const onSearch = (value,_e,info) => {
		setInputSearchValue(value)
		setPagination(1)
	};

	// Pagination
	const paginationChange = (page) => {
		console.log('paginationChange: ',page)
		setPagination(page)
	}


	const { data,categoryMost,loading,error } = useApiMeli(inputSearchValue);
	if (loading) {
		return(
			<Layout style={{ width: "100%", minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent:"center"}}>
				<Spin size="large"/>
			</Layout>
		)
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}
	


	const arrayDividido = [];

	for (let i = 0; i < data.length; i += 10) {
		const subArray = data.slice(i,i + 10);
		arrayDividido.push(subArray);
	}
	

	return(
		<Layout style={{ width: "100%",display: 'flex',alignItems: 'center',}}>

			<h1>esto es <strong>meli-test/page.jsx</strong></h1>
			<Layout style={{ width: "50%",display: 'flex',alignItems: 'center',}}>
				<Flex style={{ width: "100%",}} vertical>

					<Search
						placeholder="Enter a product to search..."
						allowClear
						enterButton="Search"
						size="large"
						onSearch={onSearch}
					/>
					<Flex style={{margin: "1rem 0"}} vertical>
						<Flex style={{ marginBottom: "1rem" }}>
							{/* <Text>{categoryMost}</Text> */}
							<Breadcrumb	separator=">"	items={categoryMost} />
						</Flex>

						<Text>{"Resultado de búsqueda de "}<strong>{inputSearchValue} {": "}</strong></Text>
						
					</Flex>
				</Flex>

				

				<Flex style={{ width: "100%" }}  vertical>
					{arrayDividido[(pagination-1)].map((item,index) => (
						<Card style={{ width: "100%" }} key={index} >
							<Link href={`/meli-test/${item.id}`} >
								<Flex>
									<Flex align="center" vertical style={{width: "160px"}}>
										<Image
											alt={item.title}
											style={{maxHeight: "100px", maxWidth: "100px"}}
											src={item.thumbnail}
										/>
									</Flex>

									<Flex align="start" vertical>
										<Text style={{ fontSize: "1.6rem",fontWeight: "bold" }}>{formatPrice(item.price,item.currency_id)}</Text>
										<Text style={{ fontSize: "1.2rem" }} >{item.title}</Text>
										<Text >{item.id}</Text>
										{/* MLA1117980186 */}
									</Flex>

								</Flex>
							</Link>

						</Card>
					))}				
				</Flex>

				<Flex style={{ margin: "1rem 0" }}>
					<Pagination
						defaultCurrent={pagination}
						onChange={paginationChange}
						current={pagination}
						total={50}
					/>
				</Flex>
				

			</Layout>

			<AboutProject />

		</Layout>
	)
}

export default MeliTest