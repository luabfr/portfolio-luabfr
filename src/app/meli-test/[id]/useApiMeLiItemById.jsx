import { useState,useEffect } from 'react';

const useApiMeLiItemById = ( itemById ) => {
	const [itemData,setItemData] = useState(null);
	const [loading,setLoading] = useState(true);
	const [error,setError] = useState(null);

	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://api.mercadolibre.com/items/${itemById}`);
				// const response = await fetch(`https://api.mercadolibre.com/items/MLA1117980186`);
				
				if (!response.ok) {
					throw new Error('No se pudo obtener los datos');
				}
				const result = await response.json();
				setItemData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	},[itemById]);

	return { itemData,loading,error };
};

export default useApiMeLiItemById;