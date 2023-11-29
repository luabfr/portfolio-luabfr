import Image from "next/image";
import arrowPortfolioSVG from "../../../../public/arrow-main.svg";

import burgerMenuSVG from "../../../../public/burger-menu.svg";


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
			alt="See Portfolio"
		/>
	)
}