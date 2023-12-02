import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';
import { useState } from "react";



export const IconCloseFM = styled(motion.div)`
	position: absolute;
	top: 4rem;
	right: 4rem;

	z-index: 1000;
	&:hover{
		cursor: pointer;
	}
`;


export const UiRectWrapper = styled(motion.div)`
	width: 140px;
	height: 140px;
	/* background: black; */
	cursor: pointer;
	/* margin-top: 4rem; */
	position: relative;
`

export const UiRect = styled(motion.div)`
	width: 140px;
	height: 3px;
	background: ${styleSystem.primaryCol};	
	translate: 0 calc(70px - 10px);
	position: absolute;

`;

export const BurguerUIWrapper = styled(motion.div)`
	position: absolute;
	z-index: 1000;
	right: 4rem;
	top: 4rem;
`;



const closeStick1 = {
	rotate: ["0deg", "0deg", "45deg", "45deg"],
	y: ["60px", "20px", "0px", "0px"],
	width: "160px"
	
}

const burguerStick1 = {
	rotate: ["45deg", "45deg", "0deg", "0deg"],
	y: ["0px", "0px", "20px", "60px"],
	width: "140px"
	
}


const closeStick2={
	rotate: ["0deg", "0deg", "-45deg", "-45deg"],
	y: ["20px", "20px", "0px", "0px"],
	width: "160px"
	
}

const burguerStick2 = {
	rotate: ["-45deg", "-45deg", "0deg", "0deg"],
	y: ["0px", "0px", "20px", "20px"],
	width: "140px"
	
}

const closeStick3 = {
	rotate: ["0deg", "0deg", "45deg", "45deg"],
	y: ["-60px", "-20px", "0px", "0px"],
	width: "160px"
}

const burguerStick3 = {
	rotate: ["45deg", "45deg", "0deg", "0deg"],
	y: ["0px", "0px", "-20px", "-60px"],
	width: "140px"
}


const closeStick4 = {
	rotate: ["0deg", "0deg", "-45deg", "-45deg"],
	y: ["-20px", "-20px", "0px", "0px"],
	width: "160px"
}

const burguerStick4 = {
	rotate: ["-45deg", "-45deg", "0deg", "0deg"],
	y: ["0px", "0px", "-20px", "-20px"],
	width: "140px"
	
}

 


export const BurguerUI = ({ })=>{
	

	const [isOpen, setIsOpen] = useState( false);


	return(
		<UiRectWrapper 
			onClick={() => setIsOpen(!isOpen)}
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 0.8 }}	>

			<UiRect
				initial={burguerStick1}
				animate={isOpen ? closeStick1 : burguerStick1}
				transition={{ times: [0, 0.4, 0.6, 1] }}
			/>

			<UiRect
				initial={burguerStick2}
				animate={isOpen ? closeStick2 : burguerStick2 }
				transition={{ times: [0, 0.4, 0.6, 1] }}
			/>

			<UiRect
				initial={burguerStick3}
				animate={isOpen ? closeStick4 : burguerStick3}
				transition={{ times: [0, 0.4, 0.6, 1] }}
			/>

			<UiRect
				initial={burguerStick4}
				animate={isOpen ? closeStick4 : burguerStick4}
				transition={{ times: [0, 0.4, 0.6, 1] }}
			/>

		</UiRectWrapper>
	)
}

