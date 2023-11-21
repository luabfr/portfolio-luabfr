import { useState,useEffect } from 'react';

interface Result {
	category_id: string;
}

interface CategoryName{
	path_from_root: [{ name: string ; id: string}];
}


const useApiMeLiItemById = ( itemById: string ) => {
	const [itemData, setItemData] = useState< any | null>(null)
	const [loading,setLoading] = useState<boolean>(true);
	const [error, setError] = useState<any | null>(null);
	const [breadcrumbState, setBreadcrumb] = useState<{ title: string; }[]>([]);

	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response: Response = await fetch(`https://api.mercadolibre.com/items/${itemById}`);
				// const response = await fetch(`https://api.mercadolibre.com/items/MLA1117980186`);

				
				if (!response.ok) {
					throw new Error('No se pudo obtener los datos');
				}
				const result: Result = await response.json();

				const response2 = await fetch(`https://api.mercadolibre.com/categories/${result.category_id}`);
				const categoryName: CategoryName = await response2.json();


				const pathFromRoot: CategoryName['path_from_root'] = categoryName.path_from_root;
				const breadcrumb : { title: string }[] = pathFromRoot.map(item => {
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