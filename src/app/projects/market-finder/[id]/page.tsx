"use client"
import React, { useState, useEffect } from "react";
import useApiMeLiItemById from "../hooks/useApiMeLiItemById";
import Layout from "antd/es/layout";
import { Space,Typography,Button,Flex,Input,Image,Spin,Divider,Col,Row,Breadcrumb,Tooltip } from 'antd';
import { CompassFilled,CodepenSquareFilled,FireFilled,GiftFilled,StarFilled, ArrowLeftOutlined  } from '@ant-design/icons';
import { formatPrice } from '../components/utils';
import LayoutLoading from "../components/LayoutLoading"
import LayoutError from "../components/LayoutError"
import Link from 'next/link'

const { Text,Title } = Typography;


interface Params {
	id: string; // El ID es opcional
}

type PageProps = {
	params: Params; // Se espera que 'params' siga la estructura de la interfaz 'Params'
};

const Page = ({ params }: PageProps)=>{

	const [imgSelected,setImgSelected] = useState<string>("")
	
	const { itemData,loading,error,breadcrumbState } = useApiMeLiItemById(params.id);

	useEffect(() => {
		// Verificar si itemData está disponible y actualizar imgSelected
		if (itemData && itemData.pictures && itemData.pictures.length > 0) {
			setImgSelected(itemData.pictures[0].secure_url);
		}
	}, [itemData]); // Ejecutar cuando itemData cambie


	if (loading) {
		return <LayoutLoading/>
	}
	if (error ) {
		return <LayoutError error={error.message} />;
	}
	
	const changeImgHandler = ( imageUrl:string )=>{
		setImgSelected(imageUrl)
	}



	if (itemData != null) {
		return (
			<Layout style={{ width: "100%",minHeight: "100vh",display: 'flex',alignItems: 'center',background: "#fff"  }}>
				<Flex style={{background:"white" , width:"100%", padding:"1rem 2rem ", justifyContent:"space-between"}}>
					<Link href="/projects/market-finder" style={{ fontSize: '2rem',color: '#08c' }}>
						<ArrowLeftOutlined />
					</Link>
					<Title style={{ margin: "0" }}>Market<span style={{ margin: "0",fontWeight: "bold",color: '#08c' }}>Finder</span></Title>
				</Flex>

				<Layout style={{ width: "80%",display: 'flex',alignItems: 'center',background: "white",padding: "4rem",paddingBottom: "8rem" }}>

					<Flex style={{width:"100%"}}>


						{/* FOTOS - CONTAINER */}
						<Flex style={{ width: "50%" }} vertical>


							{/* FOTOS MAIN */}
							<Flex style={{ height: "400px",overflow: "hidden",textAlign: "center", justifyContent:"center", padding: "1rem", border: "1px solid #ddd" , marginBottom:"1rem"}}>
								< Image
									alt={itemData.title}
									src={imgSelected}
									style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", }}
								/>
							
								
							</Flex>			

							{/* FOTOS SLIDER */}
							<Flex style={{ height: "130px", overflowX: "scroll" }} >
								{itemData != null && itemData.pictures.map((item,index) => (
									<Button key={index} onClick={() => changeImgHandler(item.secure_url)} style={{ minHeight: "100px", minWidth: "100px", overflow: "hidden",marginRight: "1rem" }}>
										<Image
											alt={itemData.title}
											width={100}
											src={item.secure_url}
											preview={false}
											style={{ maxHeight: "100%",maxWidth: "100%",width: "auto" }}
										/>
									</Button>
								))}
							</Flex>	

						</Flex>



						{/* PRODUCT INFO */}
						{/* PRODUCT INFO */}
						{/* PRODUCT INFO */}
						<Flex vertical style={{ width: "50%",marginLeft: "2rem", position: "relative" }}>
							<Flex style={{ marginBottom: "1rem" }}>
								<Breadcrumb separator=">" items={breadcrumbState} />
							</Flex>

							<Title level={3} style={{ marginTop: "0", }}>{itemData.title}</Title>
							<Title level={1} style={{marginTop:"0", fontWeight:"bold"}}>{ formatPrice( itemData.base_price , itemData.currency_id ) }</Title>

							<Divider />
							<Text>{"Condition: "} {(itemData.condition == "new") ? "New" : "Used"}  {" - Units sold: "}{itemData.sold_quantity}</Text>
							<Text	>{itemData.warranty}</Text>						
							
							<Flex>
								<span	>
									{itemData.shipping.free_shipping && 
										<Tooltip title="Free Shipping" color={"black"}>	
											<GiftFilled style={{ fontSize: '2rem',color: '#08c' }} />
										</Tooltip>
									}
								</span>
								{itemData.shipping.tags.map((item,index) => (
									<span key={index} >
										{/* <Text key={index}>{item}</Text> */}
										{item === "self_service_in" && 
											<Tooltip title="Self Service" color={"black"}>
												<CompassFilled style={{ fontSize: '2rem',color: '#08c' }} />
											</Tooltip>
										}
										{item === "mandatory_free_shipping" && 
											<Tooltip title="Mandatory Free Shiping" color={"black"}>
												<CodepenSquareFilled style={{ fontSize: '2rem',color: '#08c' }} /> 
											</Tooltip>
										}
									</span>
								))}
							</Flex>
							
							
							{/* <FireFilled />
							<GiftFilled />
							<StarFilled /> */}
							


							<Divider />
							<Text style={{color:"#999"}}>
								{"Seller Location: "} <strong>{itemData.seller_address.city.name}{", "}{itemData.seller_address.country.name}</strong>
							</Text>
							<Text style={{ color: "#999" }}>
								{"Product Location: "} 
								<strong>
									{itemData.seller_address.search_location.neighborhood != undefined && itemData.seller_address.search_location.neighborhood.name + ", "}								
									{itemData.seller_address.search_location.state != null && itemData.seller_address.search_location.state.name}
								</strong>
							</Text>
							<Divider />
							<Flex style={{width:"100%", justifyContent:"space-between", position:"absolute", bottom:"0"}}>
								<Button size={"large"} style={{ width: "48%",}}>Favorite</Button>
								<Button type="primary" size={"large"} style={{ width: "48%",}}>Buy it</Button>
							</Flex>
							
							
							
																			
						</Flex>
						
					</Flex>

					<Flex style={{justifyContent:"flex-start", width:"100%", marginTop:"4rem"}}>
						<Divider orientation="left">
							<Title level={3} style={{margin:"0 1rem"}}>Details</Title>
						</Divider>
					</Flex>
					<Flex vertical style={{ paddingTop:"2rem", width:"100%", maxHeight: "200px", overflowY: "scroll", paddingRight: "10px"}}>					
						<Row gutter={16}>
							{itemData.attributes.map((item,index) => (
								<Col key={index} span={6} order={index}>
									<Text ellipsis style={{ fontSize: ".6rem", color:"#999" }}> {item.name}{": "} <strong>{item.value_name}</strong></Text>
								</Col>
							))}
						</Row>
					</Flex>
					

				</Layout>
			</Layout>
		)
	}
}



export default Page