import { useState,useEffect } from 'react';

const useApiMeLiItemById = ( itemById ) => {
	const [itemData,setItemData] = useState(null);
	const [loading,setLoading] = useState(true);
	const [error,setError] = useState(null);
	const [breadcrumbState,setBreadcrumb] = useState(null);

	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://api.mercadolibre.com/items/${itemById}`);
				// const response = await fetch(`https://api.mercadolibre.com/items/MLA1117980186`);

				
				if (!response.ok) {
					throw new Error('No se pudo obtener los datos');
				}
				const result = await response.json();



				// console.log("result.category_id: ",result.category_id)	
				const response2 = await fetch(`https://api.mercadolibre.com/categories/${result.category_id}`);
				const categoryName = await response2.json();

				const pathFromRoot = categoryName.path_from_root;
				const breadcrumb = pathFromRoot.map(item => {
					return { title: item.name };
				});

				setBreadcrumb(breadcrumb)
				setItemData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	},[itemById]);

	return { itemData,breadcrumbState, loading,error };
};

export default useApiMeLiItemById;