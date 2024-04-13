import MyTest1 ,{hacerAlgo}from "./MyTest1";

describe('#### Testeando MyTest1 ==========',() => {

	test("## probando primer =========",()=>{

		// Arrange
		const parametro = 5;

		// Act
		const resultado = hacerAlgo(parametro);
		expect(resultado).toBe(parametro + 1);


		expect(resultado).toBe(parametro + 1);
	})

})