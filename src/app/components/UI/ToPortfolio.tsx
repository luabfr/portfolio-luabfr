import { FC } from 'react';
import styled, { css } from "styled-components"
import styleSystem from '../styleSystem';
import { motion } from 'framer-motion';


interface ToPortfolioProps {
	onClick: () => void;
}


const DiamondWrap = styled(motion.div)`
	width: 160px;
	height: 105px;
	position: absolute;
	top: 0;
	overflow: hidden;
	right: 0;
`

const Diamond = styled(motion.div)`
	background: ${styleSystem.dark};
	transform: rotate(45deg);
	width: 105px;
	height: 105px;
	position: absolute;
	left: -110px; // start
	transition: all .3s;
`

const Label = styled(motion.div)`
	color:${styleSystem.primaryCol2};	
	font-size: 2rem;
	font-family: ${styleSystem.font1};	
	position: absolute; 
	right: 60%;
	top: 50%;
	transform: translate(0, -50%);
	z-index: 900;
	transition: all .3s;
	opacity: 0;

`

const ToPortfolioWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	/* background: olive; */
	position: absolute;
	bottom:4rem;
	right: 10vw;
	z-index: 99;
	cursor: pointer;

	svg,
	path,
	polygon{
		transition: all .3s;
	}

	&:hover{		
		svg, 
		polygon{
			stroke: ${styleSystem.primaryCol2};	;
			fill:${styleSystem.primaryCol2};	;
		}
		path,{
			stroke: ${styleSystem.primaryCol2};	;
		}

		${Diamond}{
			left: -16px; // end
		}

		${Label}{
			opacity: 1;
			right: 50%;
		}

	}

	@media screen and (max-width: 768px) {
    right: 2rem;
  }
`;





export const ToPortfolio: FC<ToPortfolioProps> = ({ onClick }) => {

	const arcPath1 = "M 150 52 A 50 50 0 0 1 50 52"; 
	const arcPath2 = "M 150 52 A 50 50 0 0 0 50 52"; 


	return (
		<ToPortfolioWrapper onClick={onClick}>
			
			<Label>PORTFOLIO</Label>

			<DiamondWrap>
				<Diamond />
			</DiamondWrap>

			<motion.svg 
				width="154" 
				height="104" 
				xmlns="http://www.w3.org/2000/svg" 
				transition={{ duration: .3 }} 
				whileHover={{  }}>
				{/* Arco superior */}
				<motion.path
					d={arcPath1}
					fill="none"
					stroke="#C0B283"
					strokeWidth="4"
					strokeDasharray="200" 
					strokeDashoffset="200" 
					initial={{ opacity: 0 }}
					animate={{ strokeDashoffset: 0, opacity: 1 }} 
					transition={{ duration: 2 }} 
				/>
				{/* Arco inferior */}
				<motion.path
					d={arcPath2}
					fill="none"
					stroke="#C0B283"
					strokeWidth="4"
					strokeDasharray="200" 
					strokeDashoffset="200" 
					initial={{ opacity: 0 }}
					animate={{ strokeDashoffset: 0, opacity: 1 }} 
					transition={{ duration: 2 }} 
				/>

				{/* Rombo */}
				<motion.polygon
					points="-0,-10 10,0 0,10 -10,0"
					fill="#C0B283"
					initial={{ opacity: 0 }} 
					animate={{ opacity: 1 }} 
					transition={{ duration: 1 }} 
					transform="translate(100,52)" 
				/>

				{/* Linea */}
				<motion.path
					d="M 100,52 L 20,52"
					fill="none"
					stroke="#C0B283"
					initial={{ opacity: 0 }} 
					animate={{ strokeDashoffset: 0, opacity: 1 }}
					strokeWidth="4"
					transition={{ duration: 1 }}
					strokeDasharray="80" 
					strokeDashoffset="80" 
				/>

			</motion.svg>
		</ToPortfolioWrapper>
	)
}

