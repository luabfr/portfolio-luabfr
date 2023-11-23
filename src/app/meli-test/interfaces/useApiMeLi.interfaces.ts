


export interface SingleProduct {
	category_id: string;
	sold_quantity: number,
	price:	number,
	id: string,
	accepts_mercadopago: boolean,
	condition: string,
	currency_id: string,
	thumbnail: string,
	thumbnail_id: string,
	title: string

}


export interface ResultResults {
	results: SingleProduct[];
}

export interface CategoryName {
	path_from_root: [{ name: string; id: string }];
}
