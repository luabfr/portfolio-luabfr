"use client"
import React,{ useState } from "react";
import useApiMeLiItemById from "../hooks/useApiMeLiItemById";
import Layout from "antd/es/layout";
import { Space,Typography,Button,Flex,Input,Image,Spin,Divider,Col,Row,Breadcrumb } from 'antd';
import { CompassFilled,CodepenSquareFilled,FireFilled,GiftFilled,StarFilled } from '@ant-design/icons';
import { formatPrice } from '../components/utils';
import LayoutLoading from "../components/LayoutLoading"
import LayoutError from "../components/LayoutError"

const { Text,Title } = Typography;





const Page = ({ params })=>{
	const [imgSelected,setImgSelected] = useState("")
	
	const { itemData,loading,error,breadcrumbState } = useApiMeLiItemById(params.id);
	if (loading) {
		return <LayoutLoading/>
	}
	if (error) {
		return <LayoutError error={error.message} />;
	}
	const arrayDeResultados = itemData
	console.log('itemData',itemData)

	const changeImgHandler = (imageUrl)=>{
		setImgSelected(imageUrl)
	}

	console.log("breadcrumbState",breadcrumbState)

	return (
		<Layout style={{ width: "100%", minHeight: "100vh", display: 'flex',alignItems: 'center',}}>
			<Layout style={{ width: "80%",display: 'flex',alignItems: 'center',background: "white",padding: "4rem",paddingBottom: "8rem" }}>

				<Flex style={{width:"100%"}}>


					{/* FOTOS - CONTAINER */}
					<Flex style={{ width: "40%" }} vertical>


						{/* FOTOS MAIN */}
						<Flex style={{ height: "400px",overflow: "hidden",textAlign: "center", justifyContent:"center", padding: "1rem", border: "1px solid #ddd" , marginBottom:"1rem"}}>
							<Image
								alt={itemData.title}
								src={imgSelected === "" ? setImgSelected(itemData.pictures[0].url) : imgSelected}								
								style={{ maxHeight: "100%",maxWidth: "100%",width: "auto", }}
							/>
						</Flex>			

						{/* FOTOS SLIDER */}
						<Flex style={{ height: "130px", overflowX: "scroll" }} >
							{itemData.pictures.map((item,index) => (
								<Button key={index} onClick={() => changeImgHandler(item.url)} style={{ minHeight: "100px", minWidth: "100px", overflow: "hidden",marginRight: "1rem" }}>
									<Image
										alt={item.title}
										width={100}
										src={item.url}
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
					<Flex vertical style={{ width: "60%",marginLeft: "2rem" }}>
						<Flex style={{ marginBottom: "1rem" }}>
							<Breadcrumb separator=">" items={breadcrumbState} />
						</Flex>

						<Title level={3} style={{ marginTop: "0",textAlign: "right" }}>{itemData.title}</Title>
						<Title level={1} style={{marginTop:"0", textAlign:"right"}}>{ formatPrice( itemData.base_price , itemData.currency_id ) }</Title>

						<Divider />
						<Text>{"Condition: "} {(itemData.condition == "new") ? "New" : "Used"}  {" - Units sold: "}{itemData.sold_quantity}</Text>
						<Text	>{itemData.warranty}</Text>						
						<Text	>{itemData.shipping.free_shipping && "Free Shipping"}</Text>
						{itemData.shipping.tags.map((item,index) => (
							<>
								{/* <Text key={index}>{item}</Text> */}
								{item === "self_service_in" && <CompassFilled style={{ fontSize: '2rem',color: '#08c' }} />}
								{item === "mandatory_free_shipping" && <CodepenSquareFilled style={{ fontSize: '2rem',color: '#08c' }} /> }
							</>
						))}
						
						
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
								{itemData.seller_address.search_location.neighborhood != null && itemData.seller_address.search_location.neighborhood.name + ", "}								
								{itemData.seller_address.search_location.state != null && itemData.seller_address.search_location.state.name}
							</strong>
						</Text>
						<Divider />
						<Flex style={{width:"100%", justifyContent:"space-between", }}>
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



export default Page