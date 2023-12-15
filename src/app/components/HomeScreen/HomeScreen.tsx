"use client"
import styled , {css} from "styled-components"
import styleSystem from "../styleSystem";
import { HeroTitleWrap, HeroTextWrap, STH2, CustomHR, STH1 } from "./HomeScreen.styled";
import TextReplacer from "../TextReplacer/TextReplacer";

const myProfession = ['Frontend Developer', 'UX/UI Designer', 'Multimedia Craftsman']


// const texts1 = ['Frontend', 'UX/UI', 'Multimedial', 'Interfaces'];

const texts1 = ['UX/UI', 'Interfaces', 'Multimedial', 'Frontend', ];
const texts2 = ['Developer', 'Designer', 'Craftman'];

const HomeScreen =()=>{

	return(
		<HeroTitleWrap>
			<HeroTextWrap>
				<STH2>
					I am Luciano
				</STH2>
				<CustomHR />
				{/* <STH1 >
					Frontend <br/> Developer
				</STH1> */}
				<STH1 >
					<TextReplacer labels={texts1} thisInterval={3000} />
					{/* <br /> */}
					<TextReplacer labels={texts2} thisInterval={4500} />
				</STH1>
			</HeroTextWrap>
		</HeroTitleWrap>
	)
}



export default HomeScreen