"use client"
import React,{ useState , useEffect}from "react";
import useApiMeli from "./hooks/useApiMeLi.tsx"
import Layout from "antd/es/layout";
import { QuestionCircleOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Space,Typography,Button,Flex,Input,Image,Pagination,Card,FloatButton,Spin,Breadcrumb,Radio,Select } from 'antd';
import LayoutLoading from "./components/LayoutLoading.tsx"
import LayoutError from "./components/LayoutError.tsx"
import Link from "next/link";
import AboutProject from "./components/AboutProject.tsx"
import { formatPrice,orderProductsByPrice,orderProductsForPagination } from './components/utils.tsx';

const { Search } = Input;
const { Text,Title } = Typography;





const MeliTest =()=>{
	const [ inputSearchValue , setInputSearchValue ] = useState("iphone")
	const [ pagination , setPagination ] = useState(1)
	const [ filterConditionState , setFilterConditionState ] = useState("all")
	const [ filterCurrencyState , setFilterCurrencyState ] = useState("all")
	const [ filterSortState,setFilterSortState] = useState("Relevancia")
	
	// Search
	const onSearch = (value,_e,info) => {
		setInputSearchValue(value)
		setPagination(1)
		setFilterConditionState("all") // si hay nueva busqueda, reseteo el filtro
	};

	// Pagination
	const paginationChange = (page) => {
		setPagination(page)
	}

	const onChangeRadioCondition = (e) => {
		setFilterConditionState(e.target.value)
	}

	const onChangeRadioCurrency = (e) => {
		setFilterCurrencyState(e.target.value)
	}

	const onChangeSortSelect = (value) => {
		setFilterSortState(value)
	}


	const { data , categoryMost , loading , error } = useApiMeli(inputSearchValue);
	if (loading) {
		return	<LayoutLoading />		
	}
	if (error) {
		return <LayoutError error={error}/>
	}
	



	// const incluirFiltroPorMoneda = false
	const productsFiltered = data.filter((product) => {
		if (
			((filterCurrencyState === "all") || (product.currency_id === filterCurrencyState)) &&
			((filterConditionState === "all") || (product.condition === filterConditionState)) /*&& 			
		(!incluirFiltroPorMoneda || (incluirFiltroPorMoneda && product.currency_id === "ARS"))*/
		) {
			return true;
		} else {
			return false;
		}
	});


	console.log('productsFiltered', productsFiltered)

	const productsFilteredAndOrdered = orderProductsByPrice(productsFiltered,filterSortState);	
	const productsByPagination = orderProductsForPagination(productsFilteredAndOrdered);

	// Aca, se pasa el resultado de "orderProductsByPrice(productsFiltered,filterSortState)"
	// como parametro de la funcion orderProductsForPagination().
	// es lo mismo que lo que esta arriba, pero en una sola linea
	// const productsByPagination = orderProductsForPagination( orderProductsByPrice(productsFiltered,filterSortState) );

	

	
	
	return(
		<Layout style={{ width: "100%",display: 'flex',alignItems: 'center', minHeight: "100vh"}}>
			<Flex style={{ background: "white",width: "100%",padding: "1rem 2rem ",justifyContent: "space-between" }}>
				<Link href="/" style={{ fontSize: '2rem',color: '#08c' }}>
					<ArrowLeftOutlined />
				</Link>
				<Title style={{ margin: "0" }}>Market<span style={{ margin: "0",fontWeight: "bold",color: '#08c' }}>Finder</span></Title>
			</Flex>

			<Layout style={{ width: "80%",display: 'flex', marginTop: "4rem"}}>
				<Flex style={{ width: "100%", marginBottom: "1rem"}}>
					<Search
						placeholder="Enter a product to search..."
						allowClear
						enterButton="Search"
						size="large"
						onSearch={onSearch}
					/>
				</Flex>


				<Flex>

					{/* BUSQUEDA Y FILTROS */}
					{/* BUSQUEDA Y FILTROS */}
					{/* BUSQUEDA Y FILTROS */}							
					<Flex style={{ width: "35%",}} vertical>
						
						<Flex vertical>							
							<Text>{"Search result for "}<strong style={{ color: "#4096ff"}}>{inputSearchValue}</strong></Text>
							<Title level={5}>Search Filters</Title>						
						</Flex>

						

						<Flex style={{ marginBottom: "1rem" }} vertical >
							<Text>Condition:</Text>
							<Radio.Group onChange={onChangeRadioCondition} defaultValue="all" value={filterConditionState}>
								<Radio.Button value="all">Any</Radio.Button>
								<Radio.Button value="new">News</Radio.Button>
								<Radio.Button value="used">Used</Radio.Button>
							</Radio.Group>
						</Flex>

						<Flex style={{ marginBottom: "1rem" }} vertical>	
							<Text>Order by:</Text>
							<Select
								defaultValue="Relevancia"
								style={{ width: "90%", }}
								onChange={onChangeSortSelect}
								options={[
									{ value: 'Relevancia', label: 'Relevance',},
									{ value: 'MayorToMinor', label: 'High price', },
									{ value: 'MinorToMayor', label: 'Low price', }
								]}
							/>
						</Flex>

						
						<Flex style={{ marginBottom: "1rem" }} vertical >
							<Text>Currency:</Text>
							<Radio.Group onChange={onChangeRadioCurrency} defaultValue="all" value={filterCurrencyState}>
								<Radio.Button value="all">Any</Radio.Button>
								<Radio.Button value="ARS">Pesos ($)</Radio.Button>
								<Radio.Button value="USD">Dollars (USD)</Radio.Button>
							</Radio.Group>
						</Flex>
					</Flex>

					
					{/* PRODUCTOS */}
					{/* PRODUCTOS */}
					{/* PRODUCTOS */}				
					<Flex style={{ width: "65%" }}  vertical>
						<Flex style={{ marginBottom: "1rem" }}>
							<Breadcrumb separator=">" items={categoryMost} />
						</Flex>
						{productsByPagination.length !== 0 && productsByPagination[(pagination-1)].map((item,index) => (
							<Card style={{ width: "100%" , }} key={index} >
								<Link href={`/meli-test/${item.id}`} >
									<Flex>
										<Flex align="center" vertical style={{width: "160px", minWidth:"160px", justifyContent:"center", marginLeft:"-1rem"}}>
											<Image
												alt={item.title}
												style={{maxHeight: "100px", maxWidth: "100px"}}
												src={item.thumbnail}
											/>
										</Flex>

										<Flex align="start" vertical>
											<Text style={{ fontSize: "1.6rem",fontWeight: "bold" }}>{formatPrice(item.price,item.currency_id)}</Text>
											<Text style={{ fontSize: "1.2rem" }} >{item.title}</Text>
											<Text style={{ color: "#999" }}> { "Condition: " } {item.condition} </Text>			
										</Flex>

									</Flex>
								</Link>

							</Card>
						))}		

						{/* Si no hay productos: */}
						{productsByPagination.length === 0 &&
							<Flex style={{padding: "8rem 0", justifyContent: "center"}}>
								<Title level={3}>
									{"No products found..."}
								</Title>
							</Flex>
						}

						{/* PAGINATION */}
						{/* PAGINATION */}
						{/* PAGINATION */}			
						<Flex style={{ margin: "2rem 0 4rem",justifyContent: "center" }}>
							<Pagination
								defaultCurrent={pagination}
								onChange={paginationChange}
								current={pagination}
								total={productsFilteredAndOrdered.length}
							/>
						</Flex>

					</Flex>


				</Flex>	

				
				

			</Layout>

			<AboutProject />

		</Layout>
	)
}

export default MeliTest