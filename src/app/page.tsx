"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from "antd/es/layout"
import { Space, Typography, Button, Flex, Input, Image, Pagination, Card, FloatButton, Spin, Breadcrumb, Radio, Select } from 'antd';
import { motion } from "framer-motion"
import HeroTitle from './components/HeroTitle/HeroTitle';
import { MainX, SectionX, ToPortfolio, ToBurgerMenu } from './components/page.styled';

import Preloader from './components/Preloader/Preloader';
const { Text, Title } = Typography



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

        <SectionX >

          {/* HERO SECTION */}
          <Flex vertical style={{ width: "100%", height: "80vh" }}>
            {/* <motion.div animate={{ x: 100 }}> */}
            <HeroTitle />
            {/* </motion.div> */}         

          </Flex>

          <ToBurgerMenu/>
          <ToPortfolio/>
        </SectionX>
      )}
    </MainX>
  )
  
}
