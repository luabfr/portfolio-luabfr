"use client"
import React from "react";
import { Spin } from 'antd';
import Layout from "antd/es/layout";


const LayoutLoading=()=>{
		
	return(
		<Layout style={{ width: "100%",minHeight: "100vh",display: 'flex',alignItems: 'center',justifyContent: "center" }}>
			<Spin size="large" />
		</Layout>
	)
}


export default LayoutLoading