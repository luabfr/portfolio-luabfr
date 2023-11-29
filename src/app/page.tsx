"use client"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import HeroTitle from './components/HeroTitle/HeroTitle';
import MenuOpen from './components/MenuOpen/MenuOpen';
import { MainX, SectionX, ToPortfolio, ToBurgerMenu } from './components/page.styled';
import Preloader from './components/Preloader/Preloader';



const myProfession= ['Frontend Developer', 'UX/UI Designer', 'Multimedia Craftsman']
  



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading != false){
      setLoading(false);
    }
    
  }, []);



  return (
    <MainX >
      {loading ? (
        // Aquí puedes agregar tu componente preloader
        <div style={{ background:"#192231", width:"100vw", height:"100vh", padding: "0", margin:"0", justifyContent:"center", alignItems:"center", display:"flex"}}>
          <h1 style={{ margin: "0", padding: "0", color:"#EDDBCD"}}>loading...</h1>
        </div>
        
      ) : (
        <MenuOpen/>
        // <SectionX >

        //   <ToBurgerMenu />

        //   <ToPortfolio/>

        // </SectionX>
      )}
    </MainX>
  )
  
}
