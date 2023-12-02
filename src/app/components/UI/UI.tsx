import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { motion, MotionProps } from 'framer-motion';
import { useState } from "react";

// interface UiRectProps extends MotionProps {
	// Otros props que desees pasar al componente
// }

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
	cursor: pointer;
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


const  stick1 ={
	initial:{
		rotate: "45deg",
		y: "0px",
		width: "140px"
	},
	close: {
		rotate: ["0deg", "0deg", "40deg", "40deg"],
		y: ["60px", "20px", "0px", "0px"],
		width: "160px"	
	},
	burguer: {
		rotate: ["40deg", "40deg", "0deg", "0deg"],
		y: ["0px", "0px", "20px", "60px"],
		width: "140px"		
	}
}

const stick2 = {
	initial:{
		rotate:"45deg",
		y: "0px",
		width: "140px"
	},
	close:{
		rotate: ["0deg", "0deg", "-40deg", "-40deg"],
		y: ["20px", "20px", "0px", "0px"],
		width: "160px"	
	},
	burguer : {
		rotate: ["-40deg", "-40deg", "0deg", "0deg"],
		y: ["0px", "0px", "20px", "20px"],
		width: "140px"
	}
}

const stick3 ={
	initial : {
		rotate: "45deg",
		y: "0px",
		width: "140px"
	},
	close : {
		rotate: ["0deg", "0deg", "40deg", "40deg"],
		y: ["-60px", "-20px", "0px", "0px"],
		width: "160px"
	},
	burguer : {
		rotate: ["40deg", "40deg", "0deg", "0deg"],
		y: ["0px", "0px", "-20px", "-60px"],
		width: "140px"
	}
}

const stick4 ={
	initial : {
		rotate: "45deg",
		y: "0px",
		width: "140px"
	},
	close : {
		rotate: ["0deg", "0deg", "-40deg", "-40deg"],
		y: ["-20px", "-20px", "0px", "0px"],
		width: "160px"
	},
	burguer : {
		rotate: ["-40deg", "-40deg", "0deg", "0deg"],
		y: ["0px", "0px", "-20px", "-20px"],
		width: "140px"		
	}
}

 


export const BurguerUI = ({ })=>{
	

	const [isOpen, setIsOpen] = useState( false);


	return(
		<UiRectWrapper 
			onClick={() => setIsOpen(!isOpen)}
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 0.8 }}	
			initial={{ opacity: 0}}
			animate={{ opacity: [0,0,0.5,1] }}
			transition={{ duration: 1, times: [0, 0.70, 0.71, 1]}}
			>

			<UiRect
				initial={stick1.initial}
				animate={isOpen ? stick1.close : stick1.burguer}
				transition={{ times: [0, 0.4, 0.6, 1], duration: 1 }}
			/>

			<UiRect
				initial={stick2.initial}
				animate={isOpen ? stick2.close : stick2.burguer }
				transition={{ times: [0, 0.4, 0.6, 1], duration: 1 }}
			/>

			<UiRect
				initial={stick3.initial}
				animate={isOpen ? stick3.close : stick3.burguer}
				transition={{ times: [0, 0.4, 0.6, 1], duration: 1 }}
			/>

			<UiRect
				initial={stick4.initial}
				animate={isOpen ? stick4.close : stick4.burguer}
				transition={{ times: [0, 0.4, 0.6, 1], duration: 1 }}
			/>

		</UiRectWrapper>
	)
}

