"use client"
import styled from "styled-components"

const Wrap = styled.div`
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2rem 10vw;

`

const ScreenAnotadorDeTruco = () => {
	return(
		<Wrap>
			<h1>{"Política de Privacidad de la Aplicación 'Anotador de Truco'"}</h1>

			<p>
				{'Esta Política de Privacidad describe cómo la aplicación "Anotador de Truco" maneja la privacidad de sus usuarios. Al utilizar esta aplicación, el usuario acepta las prácticas descritas en este documento.'}</p>

			<p>
				{'Recopilación de Datos: La aplicación "Anotador de Truco" no recopila ningún tipo de datos del usuario. No solicitamos ni almacenamos información personal.'}
			</p>
			<p>
				Permisos de la Aplicación:
				<ul>
					<li> ACCESS_NETWORK_STATE: Utilizado para verificar la disponibilidad de la conexión a Internet antes de realizar acciones que requieran acceso a la red.</li>
					<li>FOREGROUND_SERVICE: Permite la ejecución de servicios en primer plano para tareas de alta prioridad, incluso si la aplicación no está en primer plano.</li>
					<li>INTERNET: Esencial para el funcionamiento de la aplicación al permitir conexiones de red.</li>
					<li>READ_EXTERNAL_STORAGE: Utilizado para acceder a archivos o recursos almacenados en el dispositivo del usuario.</li>
					<li>SYSTEM_ALERT_WINDOW: Utilizado para mostrar notificaciones emergentes o ventanas flotantes.</li>
					<li>VIBRATE: Permite el control de la vibración del dispositivo para proporcionar retroalimentación táctil.</li>
					<li>WAKE_LOCK: Permite mantener el dispositivo despierto para ciertas tareas en segundo plano.</li>
					<li>WRITE_EXTERNAL_STORAGE: Utilizado para escribir en el almacenamiento externo del dispositivo, por ejemplo, para guardar archivos.</li>
				</ul>
			</p>
			<p>
				Privacidad de los Usuarios: Respetamos la privacidad de nuestros usuarios y no recopilamos, almacenamos ni compartimos información personal. La aplicación no realiza seguimiento de la actividad del usuario ni accede a datos sensibles.
				<br />
				{"Sin Publicidad: La aplicación 'Anotador de Truco' no contiene ningún tipo de publicidad."}
				<br />
				Contacto: Si tienes preguntas o inquietudes sobre nuestra política de privacidad, puedes ponerte en contacto con nosotros a través de www.tacuara.ar o luabfr@gmail.com.
				<br />
				Cambios en la Política: Esta política de privacidad puede estar sujeta a cambios. Se recomienda revisarla periódicamente para estar al tanto de cualquier actualización.
			</p>
		</Wrap>
	)
}


export default ScreenAnotadorDeTruco