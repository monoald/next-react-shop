import { useContext  } from 'react';
import Image from 'next/image';
import AppContext from 'context/AppContext';
import removefromCartImage from '@icons/bt_added_to_cart.svg';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from 'styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { addToCart,addProduct } = useContext(AppContext);
	const {  removeFromCart } = useContext(AppContext);
	const { state: {cart} } = useContext(AppContext);

	const isProductAdded = () => cart.some( (item) => item.id == product.id) ? true : false;

	const handleCart = (item) => {
		isProductAdded() ? removeFromCart(item.id) : addToCart(item);
	};

	const handleProduct = (item) => {
		addProduct(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image
				className={styles.ProductItem__image}
        src={product.images[0]}
        alt={product.title}
        width="240"
        height="240"
        layout="responsive"
				onClick={() => handleProduct(product)}
      />
			<div className={styles.ProductItem__info}>
				<div>
					<p className={styles.ProductItem__price}>$ {product.price}</p>
					<p className={styles.ProductItem__name}>{product.title}</p>
				</div>
				<button className={styles['ProductItem__add-to-cart']} 
				onClick={() => handleCart(product)}
				>
					{ isProductAdded()
					? (	<Image className={styles.ProductItem__icon} src={removefromCartImage} alt="" /> ) 
					: ( <Image className={styles.ProductItem__icon} src={addToCartImage} alt="" /> )
					}
				</button>
			</div>
		</div>
	);
};

export default ProductItem;