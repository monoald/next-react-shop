import { useContext } from 'react';
import Image from 'next/image';
import AppContext from 'context/AppContext';
import closeIcon from '@icons/icon_close.png';
import styles from 'styles/OrderItem.module.scss';

const OrderItem = ( props ) => {
	const { product, indexValue } = props;
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = (item) => {
		removeFromCart(item);
	}

	return (
		<div className={styles.OrderItem}>
			<figure className={styles['OrderItem__Image-container']}>
				<Image className={styles.OrderItem__icon} src={product.images[0]} alt={product.title} />
			</figure>
			<p className={styles.OrderItem__title}>{product.title}</p>
			<p className={styles.OrderItem__price}>$ {product.price}</p>
			<Image className={styles.OrderItem__close} src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;