import { useContext } from 'react';
import Image from 'next/image';
import addToCart from  '@icons/bt_add_to_cart.svg';
import closeIcon from  '@icons/icon_close.png';
import AppContext from 'context/AppContext';
import styles from 'styles/ProductInfo.module.scss';

const ProductInfo = ({ product }) => {
	
	const { removeProduct } = useContext(AppContext);

	return (
		<section className={styles.ProductInfo}>
			<div className={styles.ProductInfo__container}>
				<div onClick={removeProduct} className={styles.ProductInfo__close}>
					<Image className={styles.ProductInfo__icon} src={closeIcon} alt="close product" />
				</div>
				<Image className={styles.ProductInfo__image} src={product.images[0]} alt={product.title} />
				<div className={styles.ProductInfo__text}>
					<p className={styles.ProductInfo__price}>$ {product.price}</p>
					<p className={styles.ProductInfo__name}>{product.title}</p>
					<p className={styles.ProductInfo__description}>{product.description}</p>
					<button className={`${styles.ProductInfo__button} ${styles.add-to-cart-button}`}>
						<Image src={addToCart} alt="add to cart" />
						Add to cart
					</button>
				</div>
			</div>
		</section>
	);
}

export default ProductInfo;