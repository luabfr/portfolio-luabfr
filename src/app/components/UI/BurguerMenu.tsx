import { FC } from "react";
import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';
import { useState } from "react";
import { UiRectWrapper, UiRect, stick1, stick2, stick3, stick4, BurguerUIWrapper } from "./BurguerMenu.styled";


interface BurguerUIProps {
	onClick: () => void,
	isOpen: boolean
}


export const BurguerUI: FC<BurguerUIProps> = ({ onClick, isOpen })=>{
	

	// const [isOpen, setIsOpen] = useState( false );


	return(
		<BurguerUIWrapper onClick={onClick}>
			<UiRectWrapper 
				// onClick={() => setIsOpen(!isOpen)}
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
		</BurguerUIWrapper>
	)
}

