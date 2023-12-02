import React, { useState, useRef } from 'react';
import { PortfolioUIX, H1X, MenuHR, SliderWrapper, StyledCarousel, SliderItem } from "./PortfolioScreen.styled";
import { ConfigProvider, Button } from "antd";
import { CarouselRef } from 'antd/es/carousel';

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
			<H1X>Portfolio</H1X>
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
						<SliderItem>
							<h3 style={{ fontSize: "6rem" }}>1</h3>
						</SliderItem>
						<SliderItem>
							<h3 style={{ fontSize: "6rem" }}>2</h3>
						</SliderItem>
						<SliderItem>
							<h3 style={{ fontSize: "6rem" }}>3</h3>
						</SliderItem>
						<SliderItem>
							<h3 style={{ fontSize: "6rem" }}>4</h3>
						</SliderItem>
					</StyledCarousel>
				</ConfigProvider>

				<Button onClick={()=>handleGoToSlide(1)  }>Go to Slide 3</Button>
				<Button onClick={handlePrevSlide}>Prev</Button>
				<Button onClick={handleNextSlide}>Next</Button>
			</SliderWrapper>
		</PortfolioUIX>
	)
}

export default PortfolioScreen;
