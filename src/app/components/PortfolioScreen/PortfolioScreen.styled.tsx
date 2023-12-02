"use client"
import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { Carousel } from 'antd';
import { motion } from 'framer-motion';

export const PortfolioUIX = styled.div`
	height: 100vh;	
	background: ${styleSystem.dark};
	box-sizing: border-box;
	padding: 4em;
`;

export const H1X = styled.div`
	font-family: ${styleSystem.font1};
	color: ${styleSystem.primaryCol2};
	font-size: 8rem;
	line-height: 1;
`;

export const MenuHR = styled.div`
	background: ${styleSystem.semiDark};
	height: 4px;
	width: 10rem;
	margin-bottom: 6rem;
	margin-top: 2rem;
`

export const SliderWrapper = styled.div`
  /* background: lime; */
	justify-content: center;
`

export const SliderItem = styled.div`
	height: 50vh;
	/* background: ${styleSystem.semiDark} ;	 */
	position: relative;
`

export const SliderItemTitle = styled(motion.div)`
	font-family: ${styleSystem.font1};
	font-size: 3rem;
	color: ${styleSystem.light};
`

export const SliderItemContent = styled.div`
	background: #fff ;
	height: 100%;
	position: relative;
`
export const SliderItemFooter = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	/* background: red ; */
	height: 8rem;
	display: flex;
  justify-content: space-between;
`
export const SliderItemFooterTags = styled.div`

`
export const SliderItemFooterTryIt = styled(motion.div)`
	color: ${styleSystem.primaryCol};
	font-size: 4rem;
	z-index: 500;
	padding-right: 4rem;
	padding-bottom: 2rem;
	cursor: pointer;
`

export const StyledCarousel = styled(Carousel)`
	width: 80%;
	margin: 0 auto;

	ul.slick-dots{
		bottom: 24px;
		li {
			height: 12px;
			background: ${styleSystem.semiDark} ;

			button{
				height: 12px;
				/* background: ${styleSystem.semiDark}; */
			}
		}
		li.slick-active{
			button{
				height: 12px;
				background: ${styleSystem.primaryCol};
			}
		}
	}
`




export const StyledButtonL = styled.div`
	position: absolute;
  left: 0;
  top: 50%;
	cursor: pointer;
`

export const StyledButtonR = styled.div`
	position: absolute;
  right: 0;
  top: 50%;
	cursor: pointer;
`


export const WrapperThumbnailProject = styled.div`
	/* background: brown; */
	display: flex;
	position: absolute;
  bottom: 4rem;
`

export const WrapperThumbnailProjectH1 = styled.div`
	font-family: ${styleSystem.font1};
	font-size: 2rem;
	color: ${styleSystem.primaryCol};
	position: absolute;
	top: -3.4rem;
`

export const ThumbnailProject = styled.div`
	width: 200px;
	height: 100px;
	background: indianred;
	margin-right: 2rem;
	cursor: pointer;
`