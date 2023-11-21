
// formateo de PRECIO y MODENA
export const formatPrice = (price: number,currency_id: string) => {
	return new Intl.NumberFormat('es-AR',{
		style: 'currency',
		currency: currency_id
	}).format(price);
};


export const orderProductsByPrice = (products: any[],filterSortState: string) => {
	if (filterSortState === "MayorToMinor") {
		return products.sort((a,b) => b.price - a.price);
	} else if (filterSortState === "MinorToMayor") {
		return products.sort((a,b) => a.price - b.price);
	} else {
		return products
	}
}


export const orderProductsForPagination = (productsFilteredAndOrdered: any[]) => {
	const productsByPaginationX: any[] = []
	for (let i = 0; i < productsFilteredAndOrdered.length; i += 10) {
		const subArray = productsFilteredAndOrdered.slice(i,i + 10);
		productsByPaginationX.push(subArray);
	}
	return productsByPaginationX
}