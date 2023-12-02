"use client"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import HomeScreen from './components/HomeScreen/HomeScreen';
import MenuOpen from './components/MenuOpen/MenuOpen';
import { MainX, SectionX, ToPortfolio, ToBurgerMenu } from './components/page.styled';
import Preloader from './components/Preloader/Preloader';
import { IconCloseFM } from './components/UI/UI';
import { IconClose } from './components/Icons/Icons';
import { BurguerUI, BurguerUIWrapper } from './components/UI/UI';
import PortfolioScreen from './components/PortfolioScreen/PortfolioScreen';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false)


  useEffect(() => {
    if (loading != false){
      setLoading(false);
    }
    
  }, []);



  return (
    <MainX >
      {loading ? (
        <Preloader/>
      ) : (
        
        <>
          <MenuOpen isOpen={!isMenuOpen} />
          <SectionX >

            {/* Burguer */}
            <BurguerUIWrapper onClick={() => setMenuOpen(!isMenuOpen)}>
              <BurguerUI  />
            </BurguerUIWrapper>

            {/* Link to Portfolio */}
            <ToPortfolio />



            {/* <HomeScreen /> */}
            <PortfolioScreen/>
            
          </SectionX>
        </>
      )}
    </MainX>
  )
  
}
