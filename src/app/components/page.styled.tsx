import Link from 'next/link'
import Layout from "antd/es/layout"
import { Space, Typography, Button, Flex, Input, Image, Pagination, Card, FloatButton, Spin, Breadcrumb, Radio, Select } from 'antd';
import styled, { css } from "styled-components"
import styleSystem from './styleSystem';
import { IconArrowPortfolio, IconBurgerMenu } from './Icons/Icons';

export const MainX = styled.main`
	/* background: ${styleSystem.semiDark}; */
	background: ${styleSystem.dark};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
`


export const SectionX = styled.section`
	background: ${styleSystem.dark};
	width: 1200px;	
	height: 100vh;
	position: relative;
`
const ToPortfolioWrapper = styled.div`
	position: absolute;
	bottom:4rem;
	right: 4rem;
`;

export const ToPortfolio =()=>{

	return (
		<ToPortfolioWrapper>
			<IconArrowPortfolio />
		</ToPortfolioWrapper>
	)
}


const BurgerMenuWrapper = styled.div`
	position: absolute;
	top:4rem;
	right: 4rem;
`;

export const ToBurgerMenu = () => {

	return (
		<BurgerMenuWrapper>
			<IconBurgerMenu />
		</BurgerMenuWrapper>
	)
}

















