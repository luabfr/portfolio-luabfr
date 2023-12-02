"use client"
import { FC } from 'react';
import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { IconClose } from "../Icons/Icons";
import { useAnimate, stagger, motion } from "framer-motion";
import { MenuUl, MenuLI, MenuHR, MenuBG } from "./MenuOpen.styled";



interface MenuOpenProps {
	isOpen: boolean;
}


const initialStatesLI ={
	opacity: 0, 
	x: "0", 
	marginTop: "-5rem"
}

const inViewStatesLI = {
	opacity: 1, 
	x: "0" ,
	marginTop: "0rem"
}

const MenuOpen: FC<MenuOpenProps> = ({ isOpen }) => {

	const [scope, animate] = useAnimate();

	return(

		<MenuBG animate={{ top: isOpen ? "-200vh" : "0" }}>
			<MenuUl>
				<MenuLI 
					initial={initialStatesLI}
					transition={{ delay: isOpen? 0 : 0.2 }}
					whileInView={inViewStatesLI}>
					Home
				</MenuLI>
				<MenuHR
					initial={{ opacity: 0, x: "5rem" }}
					transition={{ delay: isOpen ? 0 : 0.2 }}
					whileInView={{ opacity: 1, x: "0" }}				
				/>

				<MenuLI
					initial={initialStatesLI}
					transition={{ delay: isOpen ? 0 : 0.4 }}
					whileInView={inViewStatesLI}>
					Portfolio
				</MenuLI>
				<MenuHR 
					initial={{ opacity: 0, x: "5rem" }}
					transition={{ delay: isOpen ? 0 : 0.4 }}
					whileInView={{ opacity: 1, x: "0" }} />


				<MenuLI
					initial={initialStatesLI}
					transition={{ delay: isOpen ? 0 : 0.6 }}
					whileInView={inViewStatesLI}>
					About me
				</MenuLI>
				<MenuHR 
					initial={{ opacity: 0, x: "5rem" }}
					transition={{ delay: isOpen ? 0 : 0.6 }}
					whileInView={{ opacity: 1, x: "0" }} />


				<MenuLI
					initial={initialStatesLI}
					transition={{ delay: isOpen ? 0 : 0.8 }}
					whileInView={inViewStatesLI}>
					Contact
				</MenuLI>


			</MenuUl>
		</MenuBG>

	)
}

export default MenuOpen