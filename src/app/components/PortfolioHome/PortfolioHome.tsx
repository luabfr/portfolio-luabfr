import { FC } from 'react';
import { AboutPortfolio, Title, Wrapper } from './PortfolioHome.styled';




const PortfolioHome=()=>{
	return(
		<AboutPortfolio >
			<Title 
				initial={{ opacity: 0, x: "-1rem" }}
				animate={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, }}>
				<h2>About this Portfolio</h2>
				<hr />
			</Title>

			<Wrapper
				initial={{ opacity: 0, x: "-1rem" }}
				animate={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, delay: .2}}>
				<p>Here, you will find works related to <strong>web-app development, UX/UI design, tangible interface design, and even art works</strong>.</p>
				<p>All projects include links to: <br /> Web-Apps, Git repositories, Figma designs, Figma&apos;s interactive prototypes, UX Research or other related resources.</p>
				
				<hr />

				<p>This project has been developed using React & Next.js <a href="https://github.com/luabfr/portfolio-luabfr">(git code here)</a>. </p>
				<p>Its purpose is to showcase various projects I have been involved in. Some were commissioned by external clients, while others are personal projects and ventures.</p>


				
			</Wrapper>

		</AboutPortfolio>
	)
}


export default PortfolioHome