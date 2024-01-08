import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';


export const MenuBG = styled(motion.div)`
	position: fixed;
	top: -100vh;
	left:0;
	width: 100vw;
	height: 100vh;
	background: ${styleSystem.primaryCol2};
	z-index: 1000;
	display:flex ;
	justify-content: center;
	/* overflow: hidden; */

`

export const MenuUl = styled(motion.div)`
	width: 80vw;
	display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface MenuLITS  {
	onClick: void
}

export const MenuLI = styled(motion.div)<MenuLITS>`
	font-family:${styleSystem.font1}; ;
	color: ${styleSystem.semiDark};
	font-size: 4rem;
	line-height: 2;
	cursor: pointer;
	text-transform: uppercase;
	/* transition: all .3s; */

	@media screen and (max-width: 1200px) {
    font-size: 3em;
  }
	@media screen and (max-width: 768px) {
    font-size: 3em;
  }
	

`;

export const MenuHR = styled(motion.div)`
	background: ${styleSystem.primaryCol};
	height: 4px;
	width: 10rem;
	@media screen and (max-width: 768px) {
  	height: 2px;
		width: 4rem;
  }
`;


export const initialStatesLI = {
	opacity: 0,
	x: "0",
	marginTop: "-5rem"
}

export const inViewStatesLI = {
	opacity: 1,
	x: "0",
	marginTop: "0rem"
}