import AcceptCookies from "./AcceptCookies";

import { render,screen,fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom"



describe('AcceptCookies component', ()=>{

	let checkbox
	let article
	beforeEach(()=>{
		render(<AcceptCookies/>)
		checkbox = screen.getByLabelText("Aceptar cookies")
		article = screen.getByRole("article", {name: "mis cookies"})
	})

	test("si el checkbox está en el componte y está desactivado",()=>{

		// comprobamos si existe en el documento
		expect(checkbox).toBeInTheDocument()

		// comprobamos si: NO está checked 
		expect(checkbox).not.toBeChecked()
	})


	test("si cambia el texto al pulsar el checkbox" , () => {
		fireEvent.click(checkbox)
		// comprobamos si: SI está checked 
		expect(checkbox).toBeChecked()
		// comprobamos el "contenido de texto" del article
		expect(article.textContent).toBe('Cookies aceptadas')
	})

})