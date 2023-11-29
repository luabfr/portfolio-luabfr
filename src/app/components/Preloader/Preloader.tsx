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
			<PreloaderX>
				<h1>
					CARGANDO...
				</h1>
			</PreloaderX>
		)

}


export default Preloader