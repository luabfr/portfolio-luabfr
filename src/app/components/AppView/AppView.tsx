import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuOpen from "../MenuOpen/MenuOpen"
import { BurguerUI } from "../UI/BurguerMenu"
import { SectionX } from "../page.styled"
import HomeScreen from "../HomeScreen/HomeScreen"
import { ToPortfolio } from "../UI/ToPortfolio"
import PortfolioScreenV2 from '../PortfolioScreen/PortfolioScreenV2';
import uiStates from '@/app/store/uiStates';
import { storeTypes } from '@/app/store/interfaces';
import { updateIsMenuOpen, updateView } from '@/app/store/uiStates';
import AboutMe from '../AboutMe/AboutMe';
import FindMeOn from '../FindMeOn/FindMeOn';


const AppView =()=>{

	// UI States
	const dispatch = useDispatch();
	const uiStates = useSelector((state: storeTypes) => state.uiStates);
	
	const valor = useSelector((state: storeTypes) => state.uiStates.value);
	const inView = useSelector((state: storeTypes) => state.uiStates.inView);
	const isMenuOpen = useSelector((state: storeTypes) => state.uiStates.isMenuOpen);
	


	const handleBurguerMenu = () => {
		dispatch(updateIsMenuOpen(!isMenuOpen));		
	};

	const goToView = (viewName: string) => {
		dispatch(updateView(viewName));
	}



	return(
		<>
			<MenuOpen />
			<SectionX >

				{/* Burguer */}
				<BurguerUI onClick={handleBurguerMenu} isOpen={isMenuOpen} />

				{ inView === "home" &&
					<>
						<HomeScreen />
						<ToPortfolio onClick={() => goToView("portfolio")} />
					</>
				}

				{inView === "portfolio" &&
					<PortfolioScreenV2 />
				}

				{inView === "about" &&
					<AboutMe />
				}

				{inView === "findmeon" &&
					<FindMeOn />
				}


				{/* Version de alto impacto, con carrusel */}
				{/* <PortfolioScreen/> */}

			</SectionX>
		</>
	)
}

export default AppView