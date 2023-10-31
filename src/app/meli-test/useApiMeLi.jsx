import { useState,useEffect } from 'react';

const useApiMeLi = ( busquedaDelUsuario ) => {
	const [data,setData] = useState(null);
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
				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	},[busquedaDelUsuario]);

	return { data,loading,error };
};

export default useApiMeLi;