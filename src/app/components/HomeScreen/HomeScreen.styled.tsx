import styled , {css} from "styled-components"
import styleSystem from "../styleSystem";



export const HeroTitleWrap = styled.section`
  padding: 4em 10vw;
	height: 100vh;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	cursor: default;
`;

export const HeroTextWrap = styled.section`

`;

export const STH1 = styled.h1`
  font-size: 8em;
	font-family: ${styleSystem.font1};
	font-weight: 300;
  color: ${styleSystem.primaryCol2};
	margin: 0;
	line-height: 1;
`;

export const STH2 = styled.h2`
  font-size: 4em;
	font-family: ${styleSystem.font1};
	font-weight: 300;
  color: ${styleSystem.primaryCol};
	margin: 0;
	
`;

export const CustomHR = styled.div`
	height: 4px;
	background: ${styleSystem.semiDark};
	width: 12rem;
	margin: 2rem 0;
`
