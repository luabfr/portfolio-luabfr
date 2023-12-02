import Image from "next/image";
import arrowPortfolioSVG from "../../../../public/arrow-main_complete.svg";
import burgerMenuSVG from "../../../../public/burger-menu.svg";
import closeSVG from "../../../../public/close.svg";



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