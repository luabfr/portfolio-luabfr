"use client"
import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";


const PortfolioUIX = styled.div`
	width: 100vw;
	height: 100vh;	
	background: ${styleSystem.dark};
`;

const H1X = styled.div`
	font-family: ${styleSystem.font1};
	color: ${styleSystem.primaryCol2};
`;

const MenuHR = styled.div`
	background: ${styleSystem.semiDark};
	height: 4px;
	width: 10rem;
`

const SliderWrapper = styled.div`

`


const PortfolioUI = () => {

	return (
		<PortfolioUIX>
			<H1X>Portfolio</H1X>
			<MenuHR/>
			<SliderWrapper>

				
			</SliderWrapper>
		</PortfolioUIX>
	)

}

export default PortfolioUI