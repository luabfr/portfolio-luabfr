import { useState,useEffect } from 'react';

const useApiMeLi = ( productSearched ) => {
	const [data,setData] = useState(null);
	const [categoryMost,setCategoryMost] = useState(null);
	const [loading,setLoading] = useState(true);
	const [error,setError] = useState(null);

	
	useEffect(() => {
		const fetchData = async () => {
			try {

				const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${productSearched}`); 
				if (!response.ok) {
					throw new Error('Could not get data');
				}
				const result = await response.json();
				const arrayOfResults = result.results;



				// funcion para obtener la categoria que mas aparece
				const counter = {};
				arrayOfResults.forEach(product => {
					const category_id = product.category_id;
					if (counter[category_id]) {
						counter[category_id]++;
					} else {
						counter[category_id] = 1;
					}
				});				
				let maxCategory_id = null;
				let maxRepeated = 0;
				for (const category_id in counter) {
					if (counter[category_id] > maxRepeated) {
						maxCategory_id = category_id;
						maxRepeated = counter[category_id];
					}
				}

				const response2 = await fetch(`https://api.mercadolibre.com/categories/${maxCategory_id}`);
				const categoryName = await response2.json();

				const pathFromRoot  = categoryName.path_from_root;
				const breadcrumb = pathFromRoot.map(item => {
					return { title: item.name };
				});


				setCategoryMost(breadcrumb)
				setData(arrayOfResults );
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	},[productSearched]);

	return { data , categoryMost , loading , error };
};

export default useApiMeLi;