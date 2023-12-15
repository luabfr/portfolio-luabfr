"use client"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import HomeScreen from './components/HomeScreen/HomeScreen';
import MenuOpen from './components/MenuOpen/MenuOpen';
import { MainX, SectionX } from './components/page.styled';
import { ToPortfolio } from './components/UI/ToPortfolio';
import Preloader from './components/Preloader/Preloader';
import { IconClose } from './components/Icons/Icons';
import { BurguerUI } from './components/UI/BurguerMenu';
import { BurguerUIWrapper } from './components/UI/BurguerMenu.styled';
import PortfolioScreen from './components/PortfolioScreen/PortfolioScreen';
import PortfolioScreenV2 from './components/PortfolioScreen/PortfolioScreenV2';
import { Provider } from 'react-redux';
import store from './store/store';
import TextReplacer from './components/TextReplacer/TextReplacer';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isViewingPortfolio, setIsViewingPortfolio] = useState(false)


  useEffect(() => {
    if (loading != false){
      setLoading(false);
    }    
  }, []);



  const handleBurguerMenu = () => {
    setMenuOpen(!isMenuOpen)
  };

  const handleToPortfolio = () => {
    setIsViewingPortfolio(true)
  };


  return (
    <Provider store={store}>
      <MainX >
        {loading ? (
          <Preloader/>
        ) : (
          
          <>
            <MenuOpen isOpen={!isMenuOpen} />
            <SectionX >

              {/* Burguer */}
              <BurguerUI onClick={handleBurguerMenu} isOpen={isMenuOpen} />
              


              {!isViewingPortfolio && 
                <>
                  <HomeScreen />
                  <ToPortfolio onClick={handleToPortfolio} />
                </>
              }
              {isViewingPortfolio && 
                <PortfolioScreenV2/>
              }


              {/* Version de alto impacto, con carrusel */}
              {/* <PortfolioScreen/> */}
              
            </SectionX>
          </>
        )}
      </MainX>
    </Provider>
  )
  
}
