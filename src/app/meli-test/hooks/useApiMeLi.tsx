import { useState,useEffect } from 'react';

interface ResultResults {
	results: [{ category_id: string; }];
}

interface CategoryName {
	path_from_root: [{ name: string; id: string }];

}

const useApiMeLi = ( productSearched: string ) => {
	const [data,setData] = useState< unknown | null>(null);
	const [breadcrumbState, setBreadcrumb] = useState<{ title: string; }[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<any | null>(null);

	
	useEffect(() => {
		const fetchData = async () => {
			try {

				const response: Response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${productSearched}`); 
				if (!response.ok) {
					throw new Error('Could not get data');
				}
				const result: ResultResults = await response.json();				
				const arrayOfResults = result.results;

				// funcion para obtener la categoria que mas aparece
				const counter: { [key: string]: number } = {};
				arrayOfResults.forEach(product => {
					const category_id: string = product.category_id;
					if (counter[category_id]) {
						counter[category_id]++;
					} else {
						counter[category_id] = 1;
					}
				});				
				let maxCategory_id: string = "";
				let maxRepeated:number = 0;
				for (const category_id in counter) {
					if (counter[category_id] > maxRepeated) {
						maxCategory_id = category_id;
						maxRepeated = counter[category_id];
					}
				}

				const response2: Response = await fetch(`https://api.mercadolibre.com/categories/${maxCategory_id}`);
				const categoryName: CategoryName = await response2.json();

				const pathFromRoot  = categoryName.path_from_root;
				const breadcrumb: { title: string }[] = pathFromRoot.map(item => {
					return { title: item.name };
				});


				setBreadcrumb(breadcrumb)
				setData(arrayOfResults );
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	},[productSearched]);

	return { data, breadcrumbState , loading , error };
};

export default useApiMeLi;