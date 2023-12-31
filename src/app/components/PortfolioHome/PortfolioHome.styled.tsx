import styled from 'styled-components';
import styleSystem from '../styleSystem';

import { motion } from 'framer-motion';

export const AboutPortfolio = styled(motion.div)`
	padding-right: 10vw;
	font-family: ${styleSystem.font1};
	/* background: ${styleSystem.light}; */
	background: ${styleSystem.dark};
	box-sizing: border-box;
	width: 65vw;


	h2{
		/* color: ${styleSystem.dark}; */
		color: ${styleSystem.primaryCol};
		font-size: 2.4rem;
		font-family: ${styleSystem.font1};
		margin-top: .7rem;
	}
	hr{
		height: 2px;
		width: 80px;
		background: ${styleSystem.primaryCol};
		/* background: red; */
		border: none;
		position: relative;
		overflow: visible;
		&::after{
			content:"";
			position: absolute;
			right: -80px;			
			width: 10px;
			height: 10px;
			border: 2px solid ${styleSystem.primaryCol};
			transform: rotate(45deg) translate(0, -8px);
			border-right: none;
			border-top: none;
		}
		&::before{
			content:"";
			position: absolute;
			left: -80px;
			width: 10px;
			height: 10px;
			border: 2px solid ${styleSystem.primaryCol};
			transform: rotate(45deg) translate(0, -8px);
			border-left: none;
			border-bottom: none;
		}
	}
	p{
		font-size: 2rem;
		/* color: ${styleSystem.dark}; */
		color: ${styleSystem.primaryCol2};
		strong{
			color: ${styleSystem.primaryCol};
		}
	}
	a{
		${styleSystem.primaryColDarken1};
		&:visited {
			color: ${styleSystem.primaryColDarken2} ;
		}		
	}

`

export const Title = styled(motion.div)`
	width: 100%;
	height: 20vh;
	padding-top: 4rem;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;

`


export const Wrapper = styled(motion.div)`
	width: 100%;
	height: 80vh;
	padding: 2rem 2rem 8rem;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: scroll;
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		width: 8px; /* Ancho de la barra de desplazamiento */
	}

	&::-webkit-scrollbar-track {
		background: ${styleSystem.dark}; /* Color de fondo del track (la parte no ocupada por la barra) */
	}
	::-webkit-scrollbar-thumb {
		background-color: ${styleSystem.semiDark}; /* Color de la barra de desplazamiento */
		border-radius: 4px; /* Borde redondeado para la barra */
	}
`