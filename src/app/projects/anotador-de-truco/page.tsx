"use client"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

const Wrap = styled.div`
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	padding: 1rem 10vw;
	font-size: 1.4rem;
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	align-items: center;
	box-sizing: border-box;

	a{
		/* font-size: 1.4rem; */
		color: gold;
	}

`

const LeftDiv = styled.div`
	padding-right: 2rem;
`

const RightDiv = styled.div`
	padding: 2rem ;
`

const ScreenAnotadorDeTruco = () => {
	return(

		<Wrap>


			<LeftDiv>
				<h1>{"Anotador de Truco"}</h1>
				<p>
					{"Aplicacion diseñada con gran foco el UX destinada a Anotar el puntaje de tus partidas de Truco (juego de cartas)."}
				</p>
				<hr />

				<h2>
					{'Politicas de Privacidad'}
				</h2>
				<p>
					{"Puedes encontrar las "}
					<Link href="./anotador-de-truco/privacy-policy">
						{'Politicas de Privacidad aquí.'}
					</Link>
				</p>

				<hr />
				<h2>
					{'Descarga la App'}
				</h2>
				<p>
					{"Puedes encontrar la aplicación en la Play Store: "}
					<Link href="#">
						{'Descarga ANOTADOR DE TRUCO aquí.'}
					</Link>
				</p>
			</LeftDiv>


			<RightDiv>
				<Image
					src={"/img-portfolio/app-truco/app-truco-1280x720.png"}
					width={640}
					height={360}
					alt="Anotador de Truco - App"
				/>
			</RightDiv>
			
	
		</Wrap>
	)
}


export default ScreenAnotadorDeTruco