import styled from 'styled-components';
import styleSystem from "../styleSystem";
import { motion } from 'framer-motion';

interface BulletsProps {
	isGreen?: boolean,
	isRed?: boolean,
	isOrange?: boolean,
	isCyan?: boolean,
	isYellow?: boolean,
	tagColor: number
}

interface BodyInfoDataGroupProps{
	isFirst?: boolean
}


interface IsOpenProps {
	isOpen?: boolean;
}


export const Grid = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;

	@media screen and (max-width: 768px) {
		flex-direction: column;
  }
	
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

	@media screen and (max-width: 1200px) {
    padding-left: 2rem;
		
  }

	@media screen and (max-width: 768px) {
		width: 100vw;
		height: unset;		
		padding-bottom: 1rem;
		padding-left: 0;
		padding-right: 2rem;
		margin-bottom: 2rem;
  }

`;

export const ProjectsTitle = styled.div`
	height: 25vh;
	padding-top: 4rem;
	box-sizing: border-box;
	text-transform: uppercase;
	cursor: pointer;
	h1{
		transition: all .3s;	
	}
	&:hover{
		h1{
			color: ${styleSystem.primaryCol};
		}
	}

	@media screen and (max-width: 1200px) {
		padding-top: 1.4rem;
		height: unset;
  }

	@media screen and (max-width: 768px) {
		padding-top: 1.4rem;
		height: unset;
		margin-bottom: 1rem;
		padding-left: 2rem;
		h1{
			font-size: 2rem;
		}
  }

`;

export const ProjectsAllProjects = styled.div<IsOpenProps>`
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

	@media screen and (max-width: 768px) {
		height: 2rem;
		transiton: all .1s;
		position: absolute;
		z-index: 900;
		overflow-y: hidden;
		width: 100%;
		box-sizing: border-box;		
		padding-left: 2rem;
		padding-right: 2rem;


		${(props) =>
		props.isOpen && `
			height: unset;
			overflow-y: scroll;
			background:  ${styleSystem.dark};
			border-bottom: 2px solid  ${styleSystem.primaryCol};
		`}

  }
`;


export const ShowList = styled.button`
	display: none;
	@media screen and (max-width: 768px) {
		width: 100%;
		position: relative;
		display: flex;
		cursor: pointer;
		background: unset;
		border: none;
		color: ${styleSystem.primaryCol2};
		text-transform: uppercase;
		padding: 0;
		margin-bottom: 1rem;		
		line-height: 2;
		border-bottom: 2px solid ${styleSystem.semiDark};
		&:hover{
			 color: ${styleSystem.primaryCol};
		}

  }
`

export const X = styled.div<IsOpenProps>`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		width: 1.2rem;
		height: 1.2rem;
		/* background: red;		 */
		position: absolute;
		right: 0;
		transition: all .1s;

		&::after{
			position: absolute;
			left: 45%;
			content:"";
			width: 2px;		
			height: 1.2rem;	
			background:${styleSystem.primaryCol};
		}
		&::before{
			position: absolute;
			top: 45%;
			content:"";
			width: 1.2rem;		
			height: 2px;	
			background:${styleSystem.primaryCol};
		}

		${(props) =>
		props.isOpen && `
			transform: rotate(45deg);
		`}
  }
`



export const ProjectsSubtitle = styled.h4`
	color: ${styleSystem.primaryCol};
	margin: 0;
  font-size: 1rem;
	cursor: default;
`;

export const ProjectsName = styled.div`
	transition: all .5s;
	cursor: pointer;
	position: relative;
	&:hover{
		color: white;	
	}

`;

export const ProjectsUL = styled(motion.ul)`
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

export const ProjectsLI = styled(motion.li)`
	padding: .5rem 1rem 0 1rem ;
	font-size: 1.25rem;
`;



// Content - Porject Info (Right Content)
// Content - Porject Info (Right Content)
// Content - Porject Info (Right Content)
export const GridContent = styled.div`
	background: ${styleSystem.dark};
	width: 65vw;
	height: 100vh;
	overflow-y: auto;	
	padding: 4rem;
	padding-top: 5rem;
	padding-right: 10vw;
	box-sizing: border-box;
	font-family: ${styleSystem.font1};
	box-sizing: border-box;

	@media screen and (max-width: 1200px) {    
		padding-right: 2rem;	
		padding-top: 2rem;
		width: 100vw;
		overflow: unset;
		height: unset;
  }

	@media screen and (max-width: 768px) {
		width: 100vw;
		padding:  0 2rem 2rem 2rem;
		overflow: unset;
		height: unset;
		
  }
`;


export const FirstRow = styled(motion.div)`
	display: flex;
	flex-direction: row;
	gap: 4rem;
	box-sizing: border-box;
	margin-bottom: 2rem;

	@media screen and (max-width: 1200px) {
    flex-direction: column;
		gap: 2rem;
  }
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
  }
`;

export const BodyName = styled(motion.h2)`
	margin: 0;
	font-size: 2.4rem;
	color: ${styleSystem.primaryCol2};

	@media screen and (max-width: 1200px) {
    padding-right: 6rem;
  }

`;

export const BodySubtitle = styled(motion.h3)`
	margin-top: 0;
	/* color: ${styleSystem.primaryColDarken2};*/
	color: ${styleSystem.primaryCol};
	font-size: 1.4rem;
	@media screen and (max-width: 1200px) {
    padding-right: 6rem;
  }
`;

export const BodyInfo = styled(motion.div)`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	width: 65%;

	@media screen and (max-width: 1200px) {
    	width: 100%;	
			margin-bottom: 0;
  }

	@media screen and (max-width: 768px) {
		width: 100%;	
		margin-bottom: 0;
  }

`;

export const BodyInfoDataRow = styled(motion.div)`
	padding-top: 1rem;
	width: 35%;
	flex-direction: column;
	display: flex;
	gap: 2rem;
	box-sizing: border-box;

	@media screen and (max-width: 1200px) {
    flex-direction: row;
		width: 100%;
  }
	@media screen and (max-width: 768px) {
		width: 100%;	
  }
`;

export const BodyInfoText = styled(motion.div)`
	color: ${styleSystem.primaryCol2};	
`;

export const BodyInfoData = styled.div`
	display: flex;
	flex-direction: column;

`;

export const BodyInfoDataGroup = styled(motion.div)<BodyInfoDataGroupProps> `
	min-width: ${({ isFirst }) => (isFirst ? '30%' : '40%')}; 
	box-sizing: border-box;
	
	/* ${({ isFirst }) => (isFirst ? 'text-align: right;' : '')};  */

	@media screen and (max-width: 768px) {
		min-width: 100%;	
		width: 100%;
  }
	
`;

export const BodyInfoDataBullet = styled(motion.div)<BulletsProps>`
	background: ${styleSystem.dark};
	border-radius: 5rem;
	padding: .25rem 1rem;
	margin:.25rem;
	display: inline-flex;
	color:  ${styleSystem.primaryCol2};
	cursor: default;
	color: white;
	font-size: .8rem;
	letter-spacing: .05rem;

	background: ${(props) => {
	if (props.tagColor == 0) return '#3876BF';
	if (props.tagColor == 1) return '#FF4B91';
	if (props.tagColor == 2) return '#A25772';
	if (props.tagColor == 3) return '#2D9596';
	if (props.tagColor == 4) return '#D83F31';
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

export const BodyImgWrapper = styled(motion.div)`
	/* background: ${styleSystem.semiDark}; */
	/* height: 20rem; */
`

export const IconBurgerBG = styled(motion.div)`
	background: ${styleSystem.dark};
	width: 6.5rem;
	height: 6.5rem;
	position: absolute;
	top: 0rem;
	right: 10vw;
	z-index: 10;
	@media screen and (max-width: 1200px) {
  	right: 1rem;
  }
`
