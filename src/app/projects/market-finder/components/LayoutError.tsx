"use client"
import React from "react";
import Layout from "antd/es/layout";
import { Typography } from 'antd';
const { Text } = Typography;

type LayoutErrorProps = {
	error: unknown;
};

const LayoutError = ({ error }: LayoutErrorProps )=>{
	const message = error instanceof Error ? error.message : String(error);
		
	return(
		<Layout style={{ width: "100%",minHeight: "100vh",display: 'flex',alignItems: 'center',justifyContent: "center" }}>
			<Text>{"Error: "}{message}</Text>
		</Layout>
	)
}


export default LayoutError
