"use client"
import styled from "styled-components"
import { motion } from 'framer-motion';

const Orbit = styled(motion.div)`
	width: 600px;
	height: 600px;
	background: #302;
	position: relative;
	border-radius: 50%;
	border: 10px solid yellow;
`


const Div1 = styled(motion.div)`
	width: 60px;
	height: 60px;
	background: indianred;
	position: absolute;
	left: 50%;
	top: -35px;
	/* transform: translate(-50%, -50%); */
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4rem;
	color: black;
`


const Div2 = styled(motion.div)`
	width: 60px;
	height: 60px;
	background: green;
	position: absolute;
	left: 0;
	bottom: 20%;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4rem;
	color: black;
`


const Div3 = styled(motion.div)`
	width: 60px;
	height: 60px;
	background: cyan;
	position: absolute;
	right: 0;
	bottom: 20%;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4rem;
	color: black;
`





const AnimatedOrbit = () => {
	return (

		//  ORBITA 
		<Orbit
			animate={{ rotate: 360 }} 
			transition={{
				duration: 20, 
				repeat: Infinity,
				ease: 'linear', 
			}}>
			
			

			<Div1
				animate={{ rotate: -360,}} 
				transition={{
					duration: 20, 
					repeat: Infinity,
					ease: 'linear', 
				}}>
				1
			</Div1>


			<Div2
				animate={{ rotate: -360 }} 
				transition={{
					duration: 20, 
					repeat: Infinity,
					ease: 'linear', 
				}}>
				2
			</Div2>


			<Div3
				animate={{ rotate: -360 }} 
				transition={{
					duration: 20, 
					repeat: Infinity,
					ease: 'linear', 
				}}>
				3
			</Div3>

		</Orbit>
	)

}


export default AnimatedOrbit