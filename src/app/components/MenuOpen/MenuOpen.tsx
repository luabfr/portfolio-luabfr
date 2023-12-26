"use client"
import { FC } from 'react';
import { useAnimate, stagger, motion } from "framer-motion";
import { MenuUl, MenuLI, MenuHR, MenuBG, initialStatesLI, inViewStatesLI } from "./MenuOpen.styled";
import { useDispatch, useSelector } from 'react-redux';
import { storeTypes } from '@/app/store/interfaces';
import { updateView, updateIsMenuOpen } from '@/app/store/uiStates';





const MenuOpen: FC = () => {
	const [scope, animate] = useAnimate();

	const dispatch = useDispatch();
	const inView = useSelector((state: storeTypes) => state.uiStates.inView);
	const isMenuOpen = useSelector((state: storeTypes) => state.uiStates.isMenuOpen);
	// console.log('isMenuOpen: ', isMenuOpen)


	const goToView = ( viewName: string ) => {
		dispatch(updateView( viewName ));
		dispatch(updateIsMenuOpen(!isMenuOpen));	
	}

	return(

		<MenuBG animate={{ top: isMenuOpen ? "0vh" : "-100vh" }}>
			<MenuUl>


				<MenuLI 
					initial={initialStatesLI}
					transition={{ delay: isMenuOpen ?  0.2 : 0 }}
					whileInView={inViewStatesLI}
					whileHover={{ x: 10, color:"#192231"}}
					onClick={()=>goToView("home")}>
					Home
				</MenuLI>
				<MenuHR
					initial={{ opacity: 0, x: "5rem" }}
					transition={{ delay: isMenuOpen ?  0.2 : 0 }}
					whileInView={{ opacity: 1, x: "0" }}				
				/>


				<MenuLI
					initial={initialStatesLI}
					transition={{ delay: isMenuOpen ?  0.4 : 0 }}
					whileHover={{ x: 10, color: "#192231" }}
					whileInView={inViewStatesLI}
					onClick={() => goToView("portfolio")}>
					Portfolio
				</MenuLI>
				<MenuHR 
					initial={{ opacity: 0, x: "5rem" }}
					transition={{ delay: isMenuOpen ?  0.4 : 0 }}
					whileInView={{ opacity: 1, x: "0" }} />


				<MenuLI
					initial={initialStatesLI}
					transition={{ delay: isMenuOpen ?  0.6 : 0 }}
					whileInView={inViewStatesLI}
					whileHover={{ x: 10, color: "#192231" }}
					onClick={() => goToView("about")}>
					About me
				</MenuLI>
				<MenuHR 
					initial={{ opacity: 0, x: "5rem" }}
					transition={{ delay: isMenuOpen ?  0.6 : 0 }}
					whileInView={{ opacity: 1, x: "0" }} />


				<MenuLI
					initial={initialStatesLI}
					transition={{ delay: isMenuOpen ?  0.8 : 0 }}
					whileInView={inViewStatesLI}
					whileHover={{ x: 10, color: "#192231" }}
					onClick={() => goToView("contact")}>
					Contact
				</MenuLI>


			</MenuUl>
		</MenuBG>

	)
}

export default MenuOpen