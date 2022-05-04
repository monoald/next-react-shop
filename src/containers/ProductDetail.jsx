import Image from 'next/image';
import closeIcon from '@icons/icon_close.png';
import ProductInfo from 'components/ProductInfo';
import styles from 'styles/ProductDetail.module.scss';

const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className={styles['ProductDetail-close']}>
				<Image src={closeIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;