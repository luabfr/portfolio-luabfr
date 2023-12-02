"use client"
import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { Carousel } from 'antd';

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
`;

export const MenuHR = styled.div`
	background: ${styleSystem.semiDark};
	height: 4px;
	width: 10rem;
	margin-bottom: 3rem;
`

export const SliderWrapper = styled.div`
  background: lime;
`

export const SliderItem = styled.div`
	height: 60vh;
	background: aqua;	
`

export const StyledCarousel = styled(Carousel)`
	ul.slick-dots{
		bottom: 24px;
		li {
			height: 12px;
			background: ${styleSystem.semiDark} ;

			button{
				height: 12px;
				background: #EDDBCD;
			}
		}
	}
`