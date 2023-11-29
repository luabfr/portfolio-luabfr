"use client"
import styled, { css } from "styled-components"
import styleSystem from "../styleSystem";
import { IconClose } from "../Icons/Icons";

const MenuOpenX = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: ${styleSystem.light};
`;

const MenuOpenSection = styled.div`
	position: relative;
	margin-left: 10vw;
	width: 80vw;
	height: auto;

`;

const IconCloseWrapper = styled.div`
	position: absolute;
	top: 2rem;
	right: 2rem;
`;

const MenuUl = styled.div`

`

const MenuLI = styled.div`
font-family:${styleSystem.font1}; ;
	color: ${styleSystem.semiDark};
	font-size: 10rem;
	line-height: 2;
`

const MenuHR = styled.div`
	background: ${styleSystem.primaryCol};
	height: 4px;
	width: 10rem;
`



const MenuOpen = () =>{

	return(
		<MenuOpenX>
			<MenuOpenSection>
				<IconCloseWrapper>
					<IconClose />
				</IconCloseWrapper>

				<MenuUl>
					<MenuLI>Home</MenuLI>
					<MenuHR/>
					<MenuLI>Portfolio</MenuLI>
					<MenuHR />
					<MenuLI>About me</MenuLI>
					<MenuHR />
					<MenuLI>Contact</MenuLI>
				</MenuUl>


			</MenuOpenSection>
		</MenuOpenX>
	)
}

export default MenuOpen