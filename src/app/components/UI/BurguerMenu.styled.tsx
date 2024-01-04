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
	width: 4rem;
	height: 4rem;
	cursor: pointer;
	position: relative;
	display: flex;
	justify-content: center;
	
	/* background: black; */
`

export const UiRect = styled(motion.div)`
	width: 4rem;
	height: 3px;
	background: ${styleSystem.primaryCol};	
	translate: 0 calc(40px - 10px);
	position: absolute;
	transition: all .3s;
`;


export const BurguerUIWrapper = styled(motion.div)`
	position: absolute;
	z-index: 1000;
	right: 10vw;
	top: 1rem;

	&:hover{
		${UiRect}{
			opacity: .8;
		}
	}

	@media screen and (max-width: 1200px) {
    right: 2rem;
  }
	@media screen and (max-width: 768px) {
    right: 2rem;
  }
`;


export const stick1 = {
	initial: {
		rotate: "45deg",
		y: "0px",
		width: "4rem"
	},
	close: {
		rotate: ["0deg", "0deg", "40deg", "40deg"],
		y: ["1.5rem", "1rem", "0rem", "0rem"],
		width: "4.2rem"
	},
	burguer: {
		rotate: ["40deg", "40deg", "0deg", "0deg"],
		y: ["0rem", "0rem", ".5rem", "1.5rem"],
		width: "4rem"
	}
}

export const stick2 = {
	initial: {
		rotate: "45deg",
		y: "0rem",
		width: "3rem"
	},
	close: {
		rotate: ["0deg", "0deg", "-40deg", "-40deg"],
		y: ["1rem", "1rem", "0rem", "0rem"],
		width: "4.2rem"
	},
	burguer: {
		rotate: ["-40deg", "-40deg", "0deg", "0deg"],
		y: ["0rem", "0rem", ".5rem", ".5rem"],
		width: "4rem"
	}
}

export const stick3 = {
	initial: {
		rotate: "45deg",
		y: "0rem",
		width: "4rem"
	},
	close: {
		rotate: ["0deg", "0deg", "40deg", "40deg"],
		y: ["-1.5rem", "-.75rem", "0rem", "0rem"],
		width: "4.2rem"
	},
	burguer: {
		rotate: ["40deg", "40deg", "0deg", "0deg"],
		y: ["0rem", "0rem", "-.5rem", "-1.5rem"],
		width: "4rem"
	}
}

export const stick4 = {
	initial: {
		rotate: "45deg",
		y: "0px",
		width: "3rem"
	},
	close: {
		rotate: ["0deg", "0deg", "-40deg", "-40deg"],
		y: ["-.75rem", "-.75rem", "0rem", "0rem"],
		width: "4.2rem"
	},
	burguer: {
		rotate: ["-40deg", "-40deg", "0deg", "0deg"],
		y: ["0rem", "0rem", "-.5rem", "-.5rem"],
		width: "4rem"
	}
}


