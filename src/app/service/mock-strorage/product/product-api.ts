import {PageResult, ResponseResult} from '../../../../core/respone/result/ResponseResult';
import {HomeProducts} from '../../../../core/respone/HomeProducts';
import {home_product, product_List} from './mock-product-list';
import {Product} from '../../../../core/entity/Product';
import {ProductType} from '../../../../core/entity/productType';
import {ProductTypeEnum} from '../../../../core/enum/productType.enum';

export const HomeProductListApi: ResponseResult<HomeProducts[]> = {
	code: 200,
	count: 0,
	message: 'success',
	status: 'success',
	data: home_product
};
export const ProductListApi: ResponseResult<PageResult<Product>> = {
	code: 200,
	count: product_List.length,
	message: 'success',
	status: 'success',
	data: {
		total: product_List.length,
		result: product_List
	}
};
export const ProductBriefApi: ResponseResult<ProductType> = {
	code: 200,
	count: 1,
	message: 'success',
	status: '200',
	data: {
		name: ProductTypeEnum.boxOrCase.toString(),
		title: 'Cufflinks Box / Case',
		subTitle: 'Cufflinks Storage Box &amp; Cases for Mens Cuff links: ',
		brief: 'Okay, so you\'ve located the perfect cufflink set. Now, how do you plan to store your\n' +
		'\t\tnew stunning cufflinks? Are you just going to toss them into your sock drawer? Is that really your storage\n' +
		'\t\tidea? Its bad form you know, because men\'s cufflinks need to be treated with respect. They need to be stored\n' +
		'\t\taway properly. When you store your links in a cufflink box, you not only guarantee their protection, you\n' +
		'\t\talso make sure that then next time you need your links, they\'ll be easy to find! Seriously! You may think\n' +
		'\t\tthat you\'ll never need those wedding cufflinks again, but one day, as you put on your French cuff shirt and\n' +
		'\t\tget ready to look spiffy, you\'ll find yourself hunting for your old links. Because you\'ve taken the time to\n' +
		'\t\tstore them in a proper cufflink case, you\'ll know exactly where to find them! We carry storage options in\n' +
		'\t\tboth leather and wood. Happy shopping!',
		bottomBrief: 'Are you an organizational fanatic or a toss it about kind of guy? It really does not matter if the answer is yes or no, or somewhere in between. At some point in your life you will need cufflinks. As an organized person you will truly appreciate the conveniance of a cufflink case. \n ' +
		'\n' +
		'Whether you have numerous sets or just a few, there is a case that will fit your needs. From multi sectional to single storage cases, made of wood or leather, you can find exactly the right type of storage for your personality. Even if you are not an organized individual per say, you can just toss your link sets in the box. They don\'t need to wind up in the same specific square, just as long as you know they can be found with ease in your stunning box. \n' +
		'\n' +
		'If you have discerning tastes, one of the cases in mirror finish might be perfect. Elegant yet functional this style of box ensures you have a last look at your sleeves before heading out for a night of pleasure. \n' +
		'\n' +
		'Given the multitude of possibilities in cufflink boxes you can choose one that fits your bedroom décor. Please the wife by choosing a stunning box that fits with her decorating tastes. Hidden in plain sight, your cufflinks will be easily accessed whether you need them for the occasional wedding or every day. With so many sizes and choices, you could have a box that stores a set for each day of the week and special occasions.'
	}
}
