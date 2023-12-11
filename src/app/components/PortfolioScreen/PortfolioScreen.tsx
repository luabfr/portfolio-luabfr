import React, { useState, useRef } from 'react';
import { ConfigProvider, Popover } from "antd";
import { CarouselRef } from 'antd/es/carousel';
import { IconLeftArrowComplete, IconRightArrowComplete } from '../Icons/Icons';
import {
	PortfolioUIX,
	H1X,
	MenuHR,
	SliderWrapper,
	StyledCarousel,
	SliderItem,
	StyledButtonL,
	StyledButtonR,
	WrapperThumbnailProject,
	ThumbnailProject,
	SliderItemTitle,
	SliderItemContent,
	SliderItemFooter,
	SliderItemFooterTags,
	SliderItemFooterTryIt,
	WrapperThumbnailProjectH1,
} from "./PortfolioScreen.styled";
import Image from "next/image";
import Link from 'next/link';




const PortfolioScreen = () => {
	const carouselRef = React.useRef<CarouselRef>(null);


	const handleGoToSlide = (nSlider:number) => {
		if (carouselRef && carouselRef.current) {
			carouselRef.current.goTo(nSlider); 
		}
	};

	const handleNextSlide = () => {
		if (carouselRef && carouselRef.current) {
			carouselRef.current.next();
		}
	};

	const handlePrevSlide = () => {
		if (carouselRef && carouselRef.current) {
			carouselRef.current.prev();
		}
	};


	


	return (
		<PortfolioUIX>
			<H1X>PORTFOLIO</H1X>
			<Link href="/projects/market-finder">market-finder</Link>
			<br />
			<Link href="/projects/currencies-exchange">currencies-exchange</Link>


			<MenuHR />
			<SliderWrapper>
				<ConfigProvider
					theme={{
						components: {
							Carousel: {
								dotWidth: 100,
								dotActiveWidth: 30,
								dotHeight: 30,
							},
						},
					}}
				>
					<StyledCarousel ref={carouselRef}>

						{/* Slide 1 */}
						<SliderItem>
							<SliderItemTitle
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{delay: .5}}>
								{"MarketFinder"}
							</SliderItemTitle>
							<SliderItemContent>
								<Image 
									src="/MarketFinder.png"
									alt="Project: MarketFinder"
									layout="fill"
								/>
							</SliderItemContent>

							<SliderItemFooter	>
								<SliderItemFooterTags>

								</SliderItemFooterTags>
								<SliderItemFooterTryIt
								initial={{opacity:0}}
								whileInView={{opacity:1}}>
									Try it
								</SliderItemFooterTryIt>
							</SliderItemFooter>

						</SliderItem>

						{/* Slide 2 */}
						<SliderItem>
							<SliderItemTitle>
								{"MarketFinder"}
							</SliderItemTitle>
							<SliderItemContent>
								{"sadkasd ahskdas das djas djasdgja shda aa"}
							</SliderItemContent>

							<SliderItemFooter>
								<SliderItemFooterTags>

								</SliderItemFooterTags>
								<SliderItemFooterTryIt>	
									Try it
								</SliderItemFooterTryIt>
							</SliderItemFooter>

						</SliderItem>

						<SliderItem>
							<h3 style={{ fontSize: "6rem" }}>2</h3>
						</SliderItem>

						<SliderItem>
							<h3 style={{ fontSize: "6rem" }}>3</h3>
						</SliderItem>

					</StyledCarousel>
				</ConfigProvider>


				{/* Slider UI - prev/next Arrows */}
				<StyledButtonL onClick={handlePrevSlide}>
					<IconLeftArrowComplete/>
				</StyledButtonL>

				<StyledButtonR onClick={handleNextSlide}>
					<IconRightArrowComplete />
				</StyledButtonR>


			</SliderWrapper>



			{/* Project Thumbnails  */}
			<WrapperThumbnailProject>

				<WrapperThumbnailProjectH1>
					{"Projects"}
				</WrapperThumbnailProjectH1>

				{/* Project 1 */}				
				<ThumbnailProject onClick={() => handleGoToSlide(0)}>				
					<Image
						src="/MarketFinder.png"
						alt="Project: MarketFinder"
						width={200}
						height={100}
					/>
				</ThumbnailProject>

				{/* Project 2 */}	
				<ThumbnailProject onClick={() => handleGoToSlide(1)}>
					{"project 2"}
				</ThumbnailProject>

				{/* Project 2 */}
				<ThumbnailProject onClick={() => handleGoToSlide(2)}>
					{"project 3"}
				</ThumbnailProject>

				{/* Project 2 */}
				<ThumbnailProject onClick={() => handleGoToSlide(3)}>
					{"project 4"}
				</ThumbnailProject>

			</WrapperThumbnailProject>


		</PortfolioUIX>
	)
}

export default PortfolioScreen;
