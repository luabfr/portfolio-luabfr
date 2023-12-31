"use client"
import styled from "styled-components"
import styleSystem from "../styleSystem"

export const AboutWrapper = styled.div`
	font-family: ${styleSystem.font1};
	color: ${styleSystem.primaryCol};
	padding: 2rem 10vw 6rem;
	h4{
		margin-bottom: 0;
		font-size: 1.6rem;
	}
`

export const AboutH1 = styled.h1`
	font-size: 4rem;
	color: ${styleSystem.primaryCol2};
	margin-bottom: 0;
	text-transform: uppercase;
`

export const Line = styled.div`
	display: flex;
	width: 10rem;
	height: 4px;
	background: ${styleSystem.semiDark};
	margin-bottom: 4rem;

`

export const TitleWrap = styled.div`



`
export const ContentWrap = styled.div`

`


export const ItemsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
`

export const AboutH2 = styled.h2`
	font-size: 2.4rem;
	margin: 10rem 0;
	strong{
		color: ${styleSystem.primaryCol2};
	}
`

export const ContentItem = styled.div`
	margin-bottom: 4rem;
	/* flex: 1; */
	font-size: 1.4rem;

`

export const AboutH3 = styled.h3`
	font-size: 1.8rem;
`


export const ContentInfo = styled.div`

	color: ${styleSystem.primaryCol2};

`





const AboutMe = () => {

	return(
		<AboutWrapper>

			<TitleWrap>
				<AboutH1>
					About Me
				</AboutH1>
				<Line />
			</TitleWrap>


			<ContentWrap>

				<ContentItem>
					<AboutH2>
						Hello! I&apos;m <strong>Luciano Fritschy</strong>,<br /> 
						a passionate <strong>UX/UI Developer</strong> with experience in designing and developing web-apps and interactive interfaces.
					</AboutH2>
					<Line />
				</ContentItem>

				<ItemsGroup>

					{/* Estudios */}
					<ContentItem>
						<AboutH3>Academic Background</AboutH3>
						<ContentInfo>
							<h4>Bachelor&apos;s in Multimedia Arts, UNA</h4>
							<h4>Diploma in Sound Operations, CETEAR</h4>
							<h4>Courses focused on React, UX/UI design, Scrum, and more.</h4>
						</ContentInfo>
					</ContentItem>


					{/* Professional Experience */}
					<ContentItem>
						<AboutH3>Professional Experience</AboutH3>

						<ContentInfo>Design and development of websites and ecommerce for businesses, including work with notable clients such as Grupo Petersen and Buquebus.
							Independent projects including the design of open-source MIDI controllers and creating interactive works and generative NFTs.
							Agency experience focusing on web layout, animated banners, and JavaScript functionality development.</ContentInfo>
					</ContentItem>


					{/* Skills */}
					<ContentItem>
						<AboutH3>My Technical Skills</AboutH3>			
						<ContentInfo>
							<h4>Development: </h4>						
								React JS,	TypeScript,	Next JS,	Redux,	StyledComponents,	StoryBook,	HTML / CSS / JS,	SASS,	Bootstrap,	Wordpress,	Arduino,
							<h4>Design Tools: </h4>
								Figma, Adobe Suite, InVision
							<h4>Additional Tools: </h4>
								GIT, npm, Atlassian-Jira, Bitbucket, Scrum
							<h4>Soft Skills: </h4>
								Teamwork, Effective Communication, Critical Thinking, Problem Solving, Creative Thinking, Proactivity
						</ContentInfo>
					</ContentItem>

					

					{/* Art & Interfaces */}
					<ContentItem>
						<AboutH3>Additional Experiences</AboutH3>
						<ContentInfo>
						Participation in art exhibitions, exploring both digital and physical art forms.
						</ContentInfo>
					</ContentItem>

				</ItemsGroup>

				
				<ContentItem>
					<Line />

					<AboutH2>
						I&apos;m always eager to learn and enhance my skills. Explore my portfolio to discover more about my work!
					</AboutH2>
				</ContentItem>

			</ContentWrap>

		</AboutWrapper>
	)

}

export default AboutMe