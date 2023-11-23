
export interface CategoryName {
	path_from_root: [{ name: string; id: string }];
}


interface Shipping {
	free_shipping?: string
	tags: string[]
}

interface PicturesN {
	secure_url: string,
	url: string,
	id: string,
	size: string

}

interface SellerAddress {
	city: {
		name: string,
	}
	country: {
		id: string,
		name: string
	},
	search_location: {
		neighborhood?: {
			name: string
		},
		state?: {
			name: string
		}
	}
}


interface ItemDataAttributesValues {
	id: string,
	name: string
}

interface ItemDataAttributes {
	id: string,
	name: string,
	value_id: string,
	value_name: string,
	value_type: string,
	values: ItemDataAttributesValues[]
}


/* IMPORTANTE*/
/* Este ITERFACE define el type de la respuesta de 
** la API detalle de producto (useApiMeLiItemById)
************************************************/
export interface ItemData {
	attributes: ItemDataAttributes[]
	pictures: PicturesN[],
	condition: string,
	category_id: string,
	currency_id: string
	base_price: number,
	title: string,
	sold_quantity?: (string | number),
	warranty: string,
	seller_address: SellerAddress,
	shipping: Shipping

}

