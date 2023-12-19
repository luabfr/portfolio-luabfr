"use client"
import styled,{ css } from "styled-components"
import styleSystem from '../styleSystem';

const PreloaderX = styled.div`
	background: ${styleSystem.dark};
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`; 


const Preloader =()=>{
		return(
			<div 
				style={{
					background:"#192231", 
					width: "100vw", 
					height:"100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",						
			}}>
				<h1 style={{ color:"#C0B283"}}>
					...
				</h1>
			</div>
		)

}


export default Preloader