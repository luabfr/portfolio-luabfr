import styled from 'styled-components';
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';

interface BulletsProps {
	isGreen?: boolean,
	isRed?: boolean,
	isOrange?: boolean,
	isCyan?: boolean,
	isYellow?: boolean,
}


export const Grid = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	
`

// Content - Porject Index (Left Bar)
// Content - Porject Index (Left Bar)
// Content - Porject Index (Left Bar)
export const GridIndex = styled.div`
	width: 35vw;
	height: 100vh;
	padding-left: 10vw;
	color: ${styleSystem.primaryCol2};
	font-family: ${styleSystem.font1};
	box-sizing: border-box;
	padding-right: 0;
	padding-bottom: 4rem;


	h1{
		font-size	: 3rem ;
		margin-top: 0;
		margin-bottom: 0;
	}

	hr{
		width: 33%;
		margin-left: 0;
	}
`;

export const ProjectsTitle = styled.div`
	height: 25vh;
	padding-top: 4rem;
	box-sizing: border-box;
`;

export const ProjectsAllProjects = styled.div`
	height: 75vh;
	overflow-y: auto;
	scrollbar-width: thin;
	&::-webkit-scrollbar {
		width: 8px; /* Ancho de la barra de desplazamiento */
	}

	&::-webkit-scrollbar-track {
		background: ${styleSystem.dark}; /* Color de fondo del track (la parte no ocupada por la barra) */
	}
	::-webkit-scrollbar-thumb {
		background-color: ${styleSystem.semiDark}; /* Color de la barra de desplazamiento */
		border-radius: 4px; /* Borde redondeado para la barra */
	}
`;

export const ProjectsSubtitle = styled.h4`
	color: ${styleSystem.primaryCol};
	margin: 0;
  font-size: 1rem;
`;

export const ProjectsName = styled.div`

`;

export const ProjectsUL = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	margin-bottom: 3rem;
	hr{
		width: 16%;
		margin-left: 0;
		margin-top: 1rem;
	}
`;

export const ProjectsLI = styled.li`
	padding: .5rem 1rem 0 1rem ;
	font-size: 1.25rem;
`;



// Content - Porject Info (Right Content)
// Content - Porject Info (Right Content)
// Content - Porject Info (Right Content)
export const GridContent = styled.div`
	background: ${styleSystem.light};
	width: 65vw;
	height: 100vh;
	overflow-y: auto;	
	padding: 4rem;
	padding-top: 6rem;
	padding-right: 10vw;
	box-sizing: border-box;

	font-family: ${styleSystem.font1};
`;

export const BodyName = styled.h2`
	margin-top: 0;
`;

export const BodyInfo = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 2rem;

`;

export const BodyInfoText = styled.div`
	padding-right: 2rem;
	width: 75%;
	p{
		margin-top: 0;
	}
	
`;

export const BodyInfoData = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
`;

export const BodyInfoDataRow = styled.div`
	width: 100%;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
`;


export const BodyInfoDataGroup = styled.div`
	min-width: 33%; 
`;


export const BodyInfoDataBullet = styled.div<BulletsProps>`
	background: ${styleSystem.dark};
	border-radius: 5rem;
	padding: .25rem .5rem;
	margin:.25rem;
	display: inline-flex;
	color:  ${styleSystem.primaryCol2};


	background: ${(props) => {
	if (props.isGreen) return '#3876BF';
		if (props.isRed) return '#FF4B91';
	if (props.isCyan) return '#A25772';
	if (props.isOrange) return '#2D9596';
	if (props.isYellow) return '#D83F31';
		return `${styleSystem.dark}`; 
	}};

`


export const BodyInfoDataKey = styled.div`
	color: ${styleSystem.primaryCol};
	font-size: .75rem;
	font-weight: bold;
	letter-spacing: .025rem;
`;

export const BodyInfoDataValue = styled.div`
	color: ${styleSystem.semiDark};
	margin-bottom: 1rem;
`;



export const BodyImgWrapper = styled.div`
	background: #000;
	height: 20rem;
`


