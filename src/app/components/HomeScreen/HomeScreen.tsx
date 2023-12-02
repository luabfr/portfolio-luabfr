"use client"
import styled , {css} from "styled-components"
import styleSystem from "../styleSystem";
import { HeroTitleWrap, HeroTextWrap, STH2, CustomHR, STH1 } from "./HomeScreen.styled";


const myProfession = ['Frontend Developer', 'UX/UI Designer', 'Multimedia Craftsman']


const HomeScreen =()=>{

	return(
		<HeroTitleWrap>
			<HeroTextWrap>
				<STH2>
					I am Luciano
				</STH2>
				<CustomHR />
				<STH1 >
					Frontend <br/> Developer
				</STH1>
			</HeroTextWrap>
		</HeroTitleWrap>
	)
}



export default HomeScreen