import { useState } from "react"


const AcceptCookies =()=>{
	const [cookies, setCookies] = useState(false)

	return(
		<>
			<label htmlFor="cookCheck">
				Aceptar cookies
			</label>
			<input 
				type="checkbox" 
				id="cookCheck" 
				onClick={() => setCookies( !cookies )}/>
			<article title="mis cookies">
				{cookies ? "Cookies aceptadas" : "Lorem ipsum dolor sit amet." }
				
			</article>
		</>
	)
}

export default AcceptCookies