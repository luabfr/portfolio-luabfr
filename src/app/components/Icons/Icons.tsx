import { FC } from "react";
import Image from "next/image";
import arrowPortfolioSVG from "../../../../public/arrow-main_complete.svg";
import burgerMenuSVG from "../../../../public/burger-menu.svg";
import closeSVG from "../../../../public/close.svg";
import LeftArrowCompleteSVG from "../../../../public/left-arrow-complete.svg";
import RightArrowCompleteSVG from "../../../../public/right-arrow-complete.svg";
import figmaBgColor from "../../../../public/icons/figma-bg-color.svg";
import figmaColor from "../../../../public/icons/figma-color.svg";
import figmaProto from "../../../../public/icons/figma-proto.svg";
import gitColor from "../../../../public/icons/github-octocat-color.svg";
import mobileCode from "../../../../public/icons/mobile-code.svg";
import open from "../../../../public/icons/open.svg";
import playstoreColor from "../../../../public/icons/playstore-color.svg";
import playstoreGoogleColor from "../../../../public/icons/playstore-google-color.svg";
import spotifyColor from "../../../../public/icons/spotify-color.svg";
import uxCircle from "../../../../public/icons/ux-circle.svg";
import vimeoColor from "../../../../public/icons/vimeo-color.svg";
import youtubeColor from "../../../../public/icons/youtube-color.svg";
import pdf from "../../../../public/icons/pdf.svg";

interface IconTypes{
	width?:number,
	height?: number
}


export const IconPDF:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={pdf}
			alt="PDF File"
		/>
	)
}

export const IconYoutubeColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={youtubeColor}
			alt="See it on YouTube"
		/>
	)
}

export const IconUxCircle:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "35" : width}
			height={height == undefined ? "35" : height}
			src={uxCircle}
			alt="See git project"
		/>
	)
}

export const IconVimeoColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={vimeoColor}
			alt="See code"
		/>
	)
}

export const IconPlaystoreColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={playstoreColor}
			alt="See git project"
		/>
	)
}

export const IconPlaystoreGoogleColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={playstoreGoogleColor}
			alt="See code"
		/>
	)
}

export const IconSpotifyColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={spotifyColor}
			alt="Open it"
		/>
	)
}
export const IconGitColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={gitColor}
			alt="See git project"
		/>
	)
}

export const IconMobileCode:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={mobileCode}
			alt="See code"
		/>
	)
}

export const IconOpen:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={open}
			alt="Open it"
		/>
	)
}

export const IconFigmaBgColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={figmaBgColor}
			alt="See figma project"
		/>
	)
}

export const IconFigmaColor:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "28" : width}
			height={height == undefined ? "28" : height}
			src={figmaColor}
			alt="See figma project"
		/>
	)
}

export const IconFigmaProto:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "30" : width}
			height={height == undefined ? "30" : height}
			src={figmaProto}
			alt="See figma project"
		/>
	)
}

export const IconArrowPortfolio: FC<IconTypes> = ({ width, height }) =>{
	return(
		<Image
			priority
			width={width == undefined ? "40" : width}
			height={height == undefined ? "40" : height}
			src={arrowPortfolioSVG}
			alt="See Portfolio"
		/>
	)
}

export const IconBurgerMenu:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "40" : width}
			height={height == undefined ? "40" : height}
			src={burgerMenuSVG}
			alt="See Menu"
		/>
	)
}

export const IconClose:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "40" : width}
			height={height == undefined ? "40" : height}
			src={closeSVG}
			alt="Close"
		/>
	)
}

export const IconLeftArrowComplete:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "40" : width}
			height={height == undefined ? "40" : height}
			src={LeftArrowCompleteSVG}
			alt="Prev"
		/>
	)
}

export const IconRightArrowComplete:FC<IconTypes> = ( { width, height } ) => {
	return (
		<Image
			priority
			width={width == undefined ? "40" : width}
			height={height == undefined ? "40" : height}
			src={RightArrowCompleteSVG}
			alt="RightArrowCompleteSVG"
		/>
	)
}