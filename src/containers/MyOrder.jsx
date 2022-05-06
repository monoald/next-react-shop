import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';
import flechita from '@icons/flechita.svg';
import OrderItem from 'components/OrderItem';
import AppContext from 'context/AppContext';
import sumTotal from 'utils/sumTotal';
import styles from 'styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state: {cart} } = useContext(AppContext);
	
	return (
		<aside className={styles.MyOrder}>
			<div className={styles['MyOrder__title-container']}>
				<img className={styles.MyOrder__close} src={flechita.src} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles.MyOrder__content}>
				{cart.map( ( product, index ) => (
					<OrderItem indexValue={index} product={product} key={index} />
				))}
			</div>
			<div className={styles.order}>
				<p>
					<span className={styles.order__title}>Total</span>
				</p>
				<p className={styles.order__total}>$ {sumTotal(cart)}</p>
			</div>
			<Link href='/checkout' >
				<button className={styles['primary-button']}>
						Checkout
				</button>
			</Link>
		</aside>
	);
}

export default MyOrder;