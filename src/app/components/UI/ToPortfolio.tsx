import { FC } from 'react';
import styled, { css } from "styled-components"
import styleSystem from '../styleSystem';

import { motion } from 'framer-motion';

const ToPortfolioWrapper = styled.div`
	position: absolute;
	bottom:4rem;
	right: 11vw;
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

	}
`;

interface ToPortfolioProps {
	onClick: () => void;
}

export const ToPortfolio: FC<ToPortfolioProps> = ({ onClick }) => {

	const arcPath1 = "M 150 52 A 50 50 0 0 1 50 52"; 
	const arcPath2 = "M 150 52 A 50 50 0 0 0 50 52"; 


	return (
		<ToPortfolioWrapper onClick={onClick}>
			<motion.svg 
				width="154" 
				height="104" 
				xmlns="http://www.w3.org/2000/svg" 
				transition={{ duration: .3 }} 
				whileHover={{ scale: .9 }}>
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

