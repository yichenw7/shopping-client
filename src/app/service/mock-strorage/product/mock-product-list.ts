import {Product} from '../../../../core/entity/Product';
import {HomeProducts} from '../../../../core/respone/HomeProducts';

export const product_List: Product[] = [
	{
		name: 'Painted American Buffalo Nickel Coin Cufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/hand-painted-american-buffalo-nickel-coin-cufflinks-8.jpg',
		price: 88.6,
		listPrice: 170.00
	},
	{
		name: 'Hand Painted Horseracing Cufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/hand-painted-horseracing-cufflinks-39.jpg',
		price: 29.99,
		listPrice: 58.00
	},
	{
		name: 'Fly Fishing Cufflinks for Fisherman',
		imgUrl: '../../../../assets/copy-imgs/main-home/fly-fishing-cufflinks-for-fisherman-8.jpg',
		price: 88.6,
		listPrice: 170.00
	}
];
export const base_sellers: Product[] = [
	{
		name: 'STOCKING STUFFER--Silk Knot Cufflink Set - 5 pairs',
		imgUrl: '../../../../assets/copy-imgs/main-home/stocking-stuffer-silk-knot-cufflink-set-5-pairs-32.jpg',
		price: 14.99
	},
	{
		name: 'Silver Clear Swarovski Barrel Crystal Cufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/silver-clear-swarovski-barrel-cufflinks-50.jpg',
		price: 29.99
	},
	{
		name: 'Silver Clear Swarovski Barrel Crystal Cufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/silver-clear-swarovski-barrel-cufflinks-50.jpg',
		price: 29.99
	},
	{
		name: 'Bull &amp; Bear\n' + '\tCufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/bull-bear-cufflinks-75.jpg',
		price: 29.99
	}

] ;

export const new_arrivals: Product[] = [
	{
		name: 'STOCKING STUFFER--Silk Knot Cufflink Set - 5 pairs',
		imgUrl: '../../../../assets/copy-imgs/main-home/stocking-stuffer-silk-knot-cufflink-set-5-pairs-32.jpg',
		price: 14.99
	},
	{
		name: 'Silver Clear Swarovski Barrel Crystal Cufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/silver-clear-swarovski-barrel-cufflinks-50.jpg',
		price: 29.99
	},
	{
		name: 'Silver Clear Swarovski Barrel Crystal Cufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/silver-clear-swarovski-barrel-cufflinks-50.jpg',
		price: 29.99
	},
	{
		name: 'Bull &amp; Bear\n' + '\tCufflinks',
		imgUrl: '../../../../assets/copy-imgs/main-home/bull-bear-cufflinks-75.jpg',
		price: 29.99
	}

] ;

export const home_product: HomeProducts[] = [
	{
		title: 'New Arrivals',
		productList: product_List
	},
	{
		title: 'Featured products',
		productList: new_arrivals
	},
	{
		title: 'best Sellers',
		productList: base_sellers
	},
];
