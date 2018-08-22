export class Product {
	id?: string;
	name: string;
	imgList?: string[];
	imgUrl?: string;
	price: number;
	listPrice?: number;
}


export class ProductEx extends Product {
	imgThumbList: string[];
}
