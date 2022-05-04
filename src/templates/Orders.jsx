import OrderItem from 'components/OrderItem';
import styles from 'styles/Orders.modules.scss';

const Orders = () => {
	return (
		<div className={`Orders ${styles.Orders}`}>
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					{/* <OrderItem /> */}
				</div>
			</div>
		</div>
	);
}

export default Orders;