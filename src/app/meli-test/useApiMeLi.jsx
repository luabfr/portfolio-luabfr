import { useState,useEffect } from 'react';

const useApiMeLi = ( busquedaDelUsuario ) => {
	const [data,setData] = useState(null);
	const [categoryMost,setCategoryMost] = useState(null);
	const [loading,setLoading] = useState(true);
	const [error,setError] = useState(null);

	
	useEffect(() => {
		const fetchData = async () => {
			try {

				const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busquedaDelUsuario}`); // Reemplaza con tu URL de la API
				if (!response.ok) {
					throw new Error('No se pudo obtener los datos');
				}
				const result = await response.json();
				const arrayDeResultados = result.results;



				// funcion para obtener la categoria que mas aparece
				const contador = {};
				arrayDeResultados.forEach(producto => {
					const category_id = producto.category_id;
					if (contador[category_id]) {
						contador[category_id]++;
					} else {
						contador[category_id] = 1;
					}
				});
				// En este punto, `contador` contendrá el conteo de cada category_id.
				// Para encontrar el category_id que se repite más veces, puedes hacer lo siguiente:
				let maxCategory_id = null;
				let maxRepeticiones = 0;
				for (const category_id in contador) {
					if (contador[category_id] > maxRepeticiones) {
						maxCategory_id = category_id;
						maxRepeticiones = contador[category_id];
					}
				}
				// console.log(`El category_id que se repite más veces es ${maxCategory_id} con ${maxRepeticiones} repeticiones.`)

				// Utiliza data1 para la siguiente llamada a la API
				const response2 = await fetch(`https://api.mercadolibre.com/categories/${maxCategory_id}`);
				const categoryName = await response2.json();
				// console.log('categoryName: ', categoryName.name)

				const pathFromRoot  = categoryName.path_from_root;
				// const breadcrumb = pathFromRoot.map(item => item.name).join(' > ');
				const breadcrumb = pathFromRoot.map(item => {
					return { title: item.name };
				});
				console.log(breadcrumb);


				setCategoryMost(breadcrumb)
				setData(arrayDeResultados );
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	},[busquedaDelUsuario]);

	return { data , categoryMost , loading , error };
};

export default useApiMeLi;