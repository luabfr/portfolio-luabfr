import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';

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


export const stick1 = {
	initial: {
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

export const stick2 = {
	initial: {
		rotate: "45deg",
		y: "0px",
		width: "140px"
	},
	close: {
		rotate: ["0deg", "0deg", "-40deg", "-40deg"],
		y: ["20px", "20px", "0px", "0px"],
		width: "160px"
	},
	burguer: {
		rotate: ["-40deg", "-40deg", "0deg", "0deg"],
		y: ["0px", "0px", "20px", "20px"],
		width: "140px"
	}
}

export const stick3 = {
	initial: {
		rotate: "45deg",
		y: "0px",
		width: "140px"
	},
	close: {
		rotate: ["0deg", "0deg", "40deg", "40deg"],
		y: ["-60px", "-20px", "0px", "0px"],
		width: "160px"
	},
	burguer: {
		rotate: ["40deg", "40deg", "0deg", "0deg"],
		y: ["0px", "0px", "-20px", "-60px"],
		width: "140px"
	}
}

export const stick4 = {
	initial: {
		rotate: "45deg",
		y: "0px",
		width: "140px"
	},
	close: {
		rotate: ["0deg", "0deg", "-40deg", "-40deg"],
		y: ["-20px", "-20px", "0px", "0px"],
		width: "160px"
	},
	burguer: {
		rotate: ["-40deg", "-40deg", "0deg", "0deg"],
		y: ["0px", "0px", "-20px", "-20px"],
		width: "140px"
	}
}


