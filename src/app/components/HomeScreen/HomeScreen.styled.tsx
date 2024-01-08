import styled , {css} from "styled-components"
import styleSystem from "../styleSystem";



export const HeroTitleWrap = styled.section`
  padding: 4em 10vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	cursor: default;

	@media screen and (max-width: 768px) {
    /* Estilos específicos para pantallas más pequeñas */
  }
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

	@media screen and (max-width: 1200px) {
    font-size: 5em;
  }
	@media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export const STH2 = styled.h2`
  font-size: 6em;
	font-family: ${styleSystem.font1};
	font-weight: 300;
  color: ${styleSystem.primaryCol};
	margin: 0;

	@media screen and (max-width: 1200px) {
    font-size: 4em;
  }
	@media screen and (max-width: 768px) {
    font-size: 2em;
  }
	
`;

export const CustomHR = styled.div`
	height: 4px;
	background: ${styleSystem.semiDark};
	width: 12rem;
	margin: 2rem 0;
	@media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`
