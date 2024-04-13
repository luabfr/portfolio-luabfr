import { useState } from "react"

const TextBox =()=>{
	const [color, setColor] = useState('indigo')


	return(
		<>
			<article title="parrafo principal" style={{ color: `${color}`}}>
				Lorem ipsum dolor sit amet.
			</article>
			<button 
				onClick={
					() => setColor(color==='indigo' ? 'tomato' : 'indigo')
				}
				title="Apretame"/>
		</>
	)
}


export default TextBox