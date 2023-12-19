"use client"
import { useDispatch, useSelector } from 'react-redux';
import { HeroTitleWrap, HeroTextWrap, STH2, CustomHR, STH1 } from "./HomeScreen.styled";
import TextReplacer from "../TextReplacer/TextReplacer";


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
				<STH1 >
					<TextReplacer labels={texts1} thisInterval={3000} />
					<TextReplacer labels={texts2} thisInterval={4500} />
				</STH1>
			</HeroTextWrap>

		</HeroTitleWrap>
	)
}



export default HomeScreen