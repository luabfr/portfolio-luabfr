"use client"
import React,{ useState } from "react";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Typography,Flex,FloatButton,Drawer } from 'antd';
import Link from "next/link";
const { Text , Title } = Typography;


const AboutProject = () => {

	const [openDrawer,setOpenDrawer] = useState(false);

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
				<Title>MELI Search</Title>
				<Text>Este proyecto está hecho en base a la siguiente prueba técnica MELI: 
					<Link href="/MELI_FrontEnd_Test_Practico.pdf" target="_blank">
						Ver PDF
					</Link>
				</Text> <br />
				<Text>El proyecto consiste en conectarse a un API de MELI y que devuelve una lista de productos buscados por el usuario.</Text>
				
			</Drawer>
		</>
	)
}

export default AboutProject