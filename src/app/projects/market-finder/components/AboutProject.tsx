"use client"
import React,{ useState } from "react";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Typography,Flex,FloatButton,Drawer } from 'antd';
import Link from "next/link";
const { Text , Title } = Typography;



const AboutProject = () => {

	const [openDrawer,setOpenDrawer] = useState<boolean>(false);

	// Drawer
	const showDrawer = () => {
		setOpenDrawer(true);
	};
	const onCloseDrawer = () => {
		setOpenDrawer(false);
	};

	return(
		<>
			<FloatButton 
				icon={<QuestionCircleOutlined />} 
				type="primary" 
				style={{ right: 24, width: "80px", height:"80px" }} 
				onClick={showDrawer} 
				shape="square" 
				description="About Project" 
				/>
			<Drawer title="About project" placement="right" onClose={onCloseDrawer} open={openDrawer}>
				<Title >MarketFinder</Title>
				<Text>{"This project is based on a MercadoLibre Frontend Test: "}
					<Link href="/MELI_FrontEnd_Test_Practico.pdf" target="_blank">
						See PDF (spanish)
					</Link>
				</Text> <br />
				<Text>MarketFinder connects to the MercadoLibre API to search for any type of product in the marketplace and then, can show a product selected details page.</Text>
				
			</Drawer>
		</>
	)
}

export default AboutProject