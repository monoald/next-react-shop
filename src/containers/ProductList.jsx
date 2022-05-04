import { useContext } from 'react';
import ProductItem from 'components/ProductItem';
import ProductInfo from 'components/ProductInfo';
import useGetProducts from 'hooks/useGetProducts';
import AppContext from 'context/AppContext';
import styles from 'styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	const { state: {actualProduct} } = useContext(AppContext);

	return (
		<section className={styles.main-container}>
			{actualProduct && <ProductInfo product={actualProduct} />}
			<div className={styles.ProductList}>
				{products.map(product => {
					if (product.id !== 8) {
						return <ProductItem product={product} key={product.id} />
					}
				})}
			</div>
		</section>
	);
}

export default ProductList;