import TextBox from "./TextBox";

// render:  es una función proporcionada por React Testing Library que se utiliza para renderizar componentes React en un entorno simulado durante las pruebas.
// screen: es un objeto global proporcionado por React Testing Library que contiene funciones para buscar elementos en el DOM simulado (getByText, getByRole, getByTestId, etc). Es una forma conveniente de acceder a las funciones de selección sin tener que desestructurar el objeto devuelto por render.
// fireEvent: funciones de eventos (click, change, submit, keydown, etc)
import { render, screen, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom"

// Organizo un Grupo de tests
describe("Componente: TextBox ############", ()=>{


	let article
	let button
	// Antes de cada prueba, se ejecuta esto.
	// Recibe como parametro una funcion anonima.
	// nos permite NO repetir codigo comun en cada prueba
	beforeEach(()=>{

		render(<TextBox />)
		article = screen.getByRole(
			'article',
			{
				name: 'parrafo principal'	/* para identificar que "article" queremos evaluar usamos 'name'. el value de name debe estar especificado con la prop Title del componente.Ej: <MiComp title="parrafo principal"/> */
			}
		);

		button = screen.getByRole('button',	{	name: 'Apretame'	}	);

	})




	// Creo cada test por separado: este es el primero
	test("la caja: se encuentra en el documento" , ()=>{

		// envaluamos que 'article' esté en el documento
		expect(article).toBeInTheDocument();


	})


	//  creamos test para ver si la caja tiene color
	test("la caja: tiene color inicial",() => {

		expect(article).toHaveStyle({
			color: "indigo"
		})

	})


	//  3er test: 
	test("button click: cambiar color de articl ",() => {

		//simulamos "un click" sobre el elemento 'button'
		fireEvent.click( button )
		expect(article).toHaveStyle({
			color: "tomato"
		})

	})


})
