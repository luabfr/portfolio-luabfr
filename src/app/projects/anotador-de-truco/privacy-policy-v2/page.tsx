"use client"
import styled from "styled-components"

const Wrap = styled.div`
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2rem 10vw;

	a{
		color: #ff33ff;
	}
`

const ScreenAnotadorDeTruco = () => {
	return(
		<Wrap>
			<h1>{"Política de Privacidad de la Aplicación 'Anotador de Truco'"}</h1>

			<p><strong>{"Última actualización:"}</strong> 05/03/2026</p>

			<h2>{"Información general"}</h2>
			<p>
				{"Esta aplicación (“Anotador de Truco”) es desarrollada y operada por Luciano Fritschy. La presente Política de Privacidad describe cómo se recopila, utiliza y protege la información de los usuarios."}
			</p>

			<h2>{"Información que recopilamos"}</h2>
			<p>
				{"Anotador de Truco no recopila directamente información personal identificable como nombre, correo electrónico o dirección."}
			</p>

			<p>
				{"Sin embargo, terceros proveedores de servicios pueden recopilar automáticamente cierta información técnica, incluyendo:"}
			</p>

			<ul>
				<li>{"Identificadores del dispositivo"}</li>
				<li>{"Dirección IP"}</li>
				<li>{"Datos de uso y diagnóstico"}</li>
				<li>{"Identificador de publicidad (Advertising ID)"}</li>
				<li>{"Información sobre interacciones con anuncios"}</li>
			</ul>

			<h2>{"Publicidad"}</h2>
			<p>
				{"Anotador de Truco utiliza servicios de publicidad proporcionados por Google AdMob. AdMob puede recopilar y procesar datos con fines de mostrar anuncios personalizados o no personalizados."}
			</p>

			<p>
				{"Para más información sobre cómo Google utiliza los datos, puede consultar:"}
				<br />
				<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
					https://policies.google.com/technologies/ads
				</a>
			</p>

			<h2>{"Uso de la información"}</h2>
			<p>
				{"La información recopilada por terceros se utiliza para:"}
			</p>

			<ul>
				<li>{"Mostrar anuncios relevantes"}</li>
				<li>{"Mejorar el rendimiento y estabilidad de la App"}</li>
				<li>{"Analizar métricas de uso"}</li>
				<li>{"Prevenir fraudes"}</li>
			</ul>

			<h2>{"Compartición de información"}</h2>
			<p>
				{"Anotador de Truco no vende información personal."}
			</p>

			<p>
				{"Los datos pueden ser compartidos con proveedores de servicios como Google AdMob únicamente para la prestación de servicios publicitarios y analíticos."}
			</p>

			<h2>{"Derechos del usuario"}</h2>
			<p>
				{"Dependiendo de su jurisdicción, el usuario puede tener derecho a:"}
			</p>

			<ul>
				<li>{"Solicitar acceso a sus datos"}</li>
				<li>{"Solicitar la eliminación de datos"}</li>
				<li>{"Retirar el consentimiento para anuncios personalizados"}</li>
				<li>{"Limitar el seguimiento publicitario desde la configuración de su dispositivo"}</li>
			</ul>

			<p>
				{"En dispositivos Android, puede restablecer o limitar el identificador publicitario desde:"}
				<br />
				{"Configuración > Privacidad > Anuncios."}
			</p>

			<h2>{"Seguridad"}</h2>
			<p>
				{"Se implementan medidas razonables para proteger la información contra accesos no autorizados, alteraciones o divulgaciones indebidas."}
			</p>

			<h2>{"Cambios en esta política"}</h2>
			<p>
				{"Esta Política puede actualizarse periódicamente. Se recomienda revisarla regularmente."}
			</p>

			<h2>{"Contacto"}</h2>
			<p>
				{"Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en:"}
				<br />
				luabfr@gmail.com
			</p>
		</Wrap>
	)
}

export default ScreenAnotadorDeTruco
