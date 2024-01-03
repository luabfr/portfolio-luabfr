"use client"
import styled from "styled-components"
import styleSystem from "../styleSystem"
import {
	IconLinkedin,
	IconGithub, 
	IconWhatsapp, 
	IconEmail1, 
	IconEmail2 
} from "../Icons/Icons"

export const ContactWrapper = styled.div`
  box-sizing: border-box;
	display: flex;
  flex-direction: column;
	width: 100vw;
	height: 100vh;
	font-family: ${styleSystem.font1};
	color: ${styleSystem.primaryCol};
	padding: 2rem 10vw 6rem;
	background: ${styleSystem.semiDark};
	@media screen and (max-width: 768px) {
		padding-top: 1.4rem;
		padding-left: 2rem;
  }

`
export const ContactH1 = styled.h1`
	font-size: 4rem;
	color: ${styleSystem.primaryCol2};
	margin-bottom: 0;
	text-transform: uppercase;

	@media screen and (max-width: 768px) {
		font-size: 2rem;
		margin-top: 0;
  }

`

export const Line = styled.div`
	display: flex;
	width: 10rem;
	height: 4px;
	background: ${styleSystem.primaryCol};
	margin-bottom: 4rem;

	@media screen and (max-width: 768px) {
		width: 5rem;
		height: 2px;		
		margin-top: 1rem;
		margin-bottom: 4rem;
  }

`

export const TitleWrap = styled.div`

`


export const ContentWrap = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4rem;
	height: inherit;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
  }
	
`
export const DivL = styled.div`
	flex: 1;
	@media screen and (max-width: 768px) {
		border-bottom: 2px solid ${styleSystem.primaryCol};


  }
`

export const DivR = styled.div`
	flex: 1;
`

export const ContentItem = styled.div`
	font-size: 2rem;
	color: ${styleSystem.primaryCol};
	margin-bottom: 2rem;
`


export const Key = styled.div`

	@media screen and (max-width: 768px) {
		font-size: 1.6rem;
  }

`

export const Value = styled.div`
	color: ${styleSystem.primaryCol2};
	font-size: 4rem;
	a{
		transition: all .3s;
		color: ${styleSystem.primaryCol2};
		text-decoration:none;
		&:hover{
			color: ${styleSystem.light};
			transform: translateX(10px);
			margin-left: 10px;
		}
	}
	@media screen and (max-width: 768px) {
		font-size: 2rem;
  }

`




const FindMeOn = () => {

	return (
		<ContactWrapper>
			<TitleWrap>
				<ContactH1>
					<Key>
						Find Me On
					</Key>
				</ContactH1>
				<Line />
			</TitleWrap>



			<ContentWrap>

		

				<DivL>

					<ContentItem>
						<Key>
							Whatsapp
						</Key>
						<Value>
							<a href="https://api.whatsapp.com/send/?phone=5493777742592">(+549) 3777-742592</a>
						</Value>
					</ContentItem>

					<ContentItem>
						<Key>
							E Mail
						</Key>
						<Value>
							<a href="mailto:luabfr@gmail.com?Subject=Hi%20Luciano%20">
								luabfr@gmail.com
							</a>
						</Value>
					</ContentItem>
					

				</DivL>


				<DivR>
					<ContentItem>
						<Key>
							LinkedIn
						</Key>
						<Value>
							<a href="https://www.linkedin.com/in/lucianofritschy/">/lucianofritschy/</a>
						</Value>
					</ContentItem>

					<ContentItem>
						<Key>
							Github
						</Key>
						<Value>
							<a href="https://github.com/luabfr/">/luabfr/</a>
						</Value>
					</ContentItem>
					
				</DivR>


			</ContentWrap>


		</ContactWrapper>
	)

}

export default FindMeOn