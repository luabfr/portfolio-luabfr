import styled from 'styled-components';
import styleSystem from '../styleSystem';
import Carousel from 'antd';
import { motion } from 'framer-motion';
import { Slider } from 'antd';

export const AboutPortfolio = styled(motion.div)`
	padding-right: 10vw;
	font-family: ${styleSystem.font1};
	background: ${styleSystem.dark};
	box-sizing: border-box;
	width: 65vw;
	cursor: default;

	h2{
		/* color: ${styleSystem.dark}; */
		color: ${styleSystem.primaryCol};
		font-size: 2.4rem;
		font-family: ${styleSystem.font1};
		margin-top: .7rem;
		margin-bottom: 0;
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
		margin: 4rem 0;
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

	@media screen and (max-width: 1200px) {
    padding-right: 0;
  }

	@media screen and (max-width: 768px) {
		width: 100vw;
		padding: 0;
		h2{
			margin: 0 0;
		}
  }

`

export const Title = styled(motion.div)`
	width: 100%;
	height: 6rem;
	padding-top: 2rem;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	overflow: hidden;
	text-transform: uppercase;
	padding-left: 2rem;

	@media screen and (max-width: 1200px) {
		padding-top: 1.4rem;
  }
	@media screen and (max-width: 768px) {
		height: unset;
		padding: 0 2rem;
		
  }

`


export const Wrapper = styled(motion.div)`
	width: 100%;
	min-height: 80vh;
	/* padding: 2rem 2rem 8rem; */
	
	padding: 2rem 2rem 4rem ;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* overflow-x: scroll; */
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

	.slick-dots-right{
		inset-inline-end: 12px;
	}

	.slick-dots li button{
		background: ${styleSystem.primaryCol};
		opacity: .8;
	}
	.slick-dots li button:hover{
		background: ${styleSystem.primaryCol};
		opacity: 1;
	}
	.slick-dots li.slick-active button{
		background: ${styleSystem.primaryCol2};
	}



	@media screen and (max-width: 768px) {
		height: unset;
		padding: 1rem 1rem 1rem 2rem;
  }

`;



export const SliderItem = styled(motion.div)`
	height: 600px;
	display: flex !important;
	justify-content: center;
	align-items: center;
	
	p{
		padding: 0 4rem 0 0;
		text-align: center ;
	}

	@media screen and (max-width: 1200px) {
    height: 400px;
		p{
			font-size: 1.6rem;
		}
  }
	
	@media screen and (max-width: 768px) {
		height: 400px;
		p{
			padding: 0 3rem 0 0;
			margin: 0;
			font-size: 1.6rem;
		}
  }
`
