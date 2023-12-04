"use client"
import React from "react";
import Layout from "antd/es/layout";
import { Typography } from 'antd';
const { Text } = Typography;

const LayoutError = (error: any )=>{
		
	return(
		<Layout style={{ width: "100%",minHeight: "100vh",display: 'flex',alignItems: 'center',justifyContent: "center" }}>
			<Text>{"Error: "}{error.message}</Text>
		</Layout>
	)
}


export default LayoutError