import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';


export const MenuBG = styled(motion.div)`
	position: absolute;
	top: 0;
	left:0;
	width: 100vw;
	height: 100vh;
	background: ${styleSystem.primaryCol2};
	z-index: 100;
	display:flex ;
	justify-content: center;

`

export const MenuUl = styled(motion.div)`
		width: 80vw;
`


export const MenuLI = styled(motion.div)`
	font-family:${styleSystem.font1}; ;
	color: ${styleSystem.semiDark};
	font-size: 10rem;
	line-height: 2;
`

export const MenuHR = styled(motion.div)`
	background: ${styleSystem.primaryCol};
	height: 4px;
	width: 10rem;
`
