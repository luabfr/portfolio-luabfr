"use client"
import styled from "styled-components"
import AnimatedOrbit from "./AnimatedOrbit/AnimatedOrbit"
import AnimatedTextScroll from "./AnimatedTextScroll/AnimatedTextScroll"

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
const Section = styled.section`
	height: 100vh;
	width: 100%;
	background: chocolate;
	display: flex;
	justify-content: center;
	align-items: center;

`

const Section2 = styled(Section)`
	background: darkred;
`

const Section3 = styled(Section)`
	background: coral;
`


const TestPage = () => {


	return(
		<Container>
			<Section>
				<AnimatedOrbit/>
			</Section>

		 	<Section2>
				<h2>Section 2</h2>
			</Section2>

			<Section3>
				<AnimatedTextScroll/>
			</Section3>

			<Section2>
				<h2>Section 4</h2>
			</Section2>

		</Container>	
	)

}


export default TestPage