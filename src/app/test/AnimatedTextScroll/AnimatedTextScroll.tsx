"use client"
import { useRef } from "react";
import styled from "styled-components"
import { motion, useInView } from 'framer-motion';

const All = styled.section`
	height: 200px;
	width: 100%;
	background: beige;
	display: flex;
	justify-content: center;
	align-items: center;
	color: darkblue;
	font-size: 3rem;
	font-family: Arial, Helvetica, sans-serif;
	position: relative;
`
const Wrap = styled.section`
	display: flex;
	width: 600px;
	background: lightcoral;
	position: relative;

`

const Sign1 = styled(motion.div)`
	width: 40px;
	height: 40px;
	background: darkkhaki;
	position: absolute;	
	top: -50px;
	left: 0;
`

const Sign2 = styled(motion.div)`
	width: 40px;
	height: 40px;
	background: darkkhaki;
	position: absolute;	
	top: -50px;
	left: 50px;
`

const Sign3 = styled(motion.div)`
	width: 40px;
	height: 40px;
	background: darkkhaki;
	position: absolute;	
	top: -50px;
	left: 100px;
`


const defaultAnimations = {
	hidden:{
		opacity: 0,
	},
	visible:{
		opacity: 1,
	}
}



const AnimatedTextScroll = () => {
	const text = "Who wants a new role."
	const ref = useRef(null)
	const isInView = useInView(ref, { amount: .5, /*once: true*/ }) 

	return (
		<All>
			<Wrap>
						
				<motion.span
					ref={ref}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					transition={isInView ? { staggerChildren: 0.05 } : { staggerChildren: 0 }}

				>

					{text.split("").map((char, index) =>(
						<motion.span 
							key={index}
							variants={defaultAnimations}
						>
							{char}
						</motion.span>
					))}

					<Sign1 variants={defaultAnimations} >
						{"!"}
					</Sign1>
					<Sign2 variants={defaultAnimations} >
						{"!"}
					</Sign2>
					<Sign3 variants={defaultAnimations} >
						{"!"}
					</Sign3>
				</motion.span>
			</Wrap>
		</All>
	)

}


export default AnimatedTextScroll