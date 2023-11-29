"use client"
import styled , {css} from "styled-components"
import styleSystem from "../styleSystem";



const Wrapper = styled.section`
  padding: 4em;
	margin-top: 12rem;
`;


const STH1 = styled.h1`
  font-size: 10em;
	font-family: ${styleSystem.font1};
	font-weight: 300;
  color: ${styleSystem.primaryCol2};
	margin: 0;
	line-height: 1;
`;

const STH2 = styled.h2`
  font-size: 5em;
	font-family: ${styleSystem.font1};
	font-weight: 300;
  color: ${styleSystem.primaryCol};
	margin: 0;
	
`;

const CustomHR = styled.div`
	height: 4px;
	background: ${styleSystem.semiDark};
	width: 12rem;
	margin: 2rem 0;
`


const HeroTitle =()=>{

	return(
		<Wrapper>
			<STH2>
				I am Luciano
			</STH2>
			<CustomHR />
			<STH1 >
				Frontend <br/> Developer
			</STH1>
		</Wrapper>
	)
}



export default HeroTitle