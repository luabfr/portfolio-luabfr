import Image from "next/image";
import arrowPortfolioSVG from "../../../../public/arrow-main_complete.svg";
import burgerMenuSVG from "../../../../public/burger-menu.svg";
import closeSVG from "../../../../public/close.svg";
import LeftArrowCompleteSVG from "../../../../public/left-arrow-complete.svg";
import RightArrowCompleteSVG from "../../../../public/right-arrow-complete.svg";



export const IconArrowPortfolio =()=>{
	return(
		<Image
			priority
			src={arrowPortfolioSVG}
			alt="See Portfolio"
		/>
	)
}

export const IconBurgerMenu = () => {
	return (
		<Image
			priority
			src={burgerMenuSVG}
			alt="See Menu"
		/>
	)
}

export const IconClose = () => {
	return (
		<Image
			priority
			src={closeSVG}
			alt="Close"
		/>
	)
}

export const IconLeftArrowComplete = () => {
	return (
		<Image
			priority
			src={LeftArrowCompleteSVG}
			alt="Prev"
		/>
	)
}

export const IconRightArrowComplete = () => {
	return (
		<Image
			priority
			src={RightArrowCompleteSVG}
			alt="RightArrowCompleteSVG"
		/>
	)
}