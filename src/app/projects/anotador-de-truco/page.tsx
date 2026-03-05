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
		color: gold;
	}
`

const LeftDiv = styled.div`
	padding-right: 2rem;
`

const RightDiv = styled.div`
	padding: 2rem;
`

const ScreenAnotadorDeTruco = () => {
	return(
		<Wrap>
			<LeftDiv>
				<h1>{"Anotador de Truco"}</h1>
				<p>
					{"Aplicación diseñada con gran foco en UX destinada a anotar el puntaje de tus partidas de Truco (juego de cartas)."}
				</p>
				<hr />

				<h2>
					{"Políticas de Privacidad"}
				</h2>
				<p>
					{"Puedes encontrar las "}
					<Link href="/projects/anotador-de-truco/privacy-policy">
						{"Políticas de Privacidad aquí."}
					</Link>
				</p>

				<hr />
				<h2>
					{"Descarga la App"}
				</h2>
				<p>
					{"Puedes encontrar la aplicación en la Play Store: "}
					<Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
						{"Descarga ANOTADOR DE TRUCO aquí."}
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
