import styles from 'styles/Menu.module.scss';

const Menu = () => {
	return (
		<div className={`Menu ${styles.Menu}`}>
			<ul className={styles.Menu__list}>
				<li className={styles['list-item']}>
					<a href="/" className={styles['list-item__element']}>My orders</a>
				</li>
				<li className={styles['list-item']}>
					<a href="/" className={styles['list-item__element']}>My account</a>
				</li>
				<li className={`${styles['list-item']} ${styles['sign-out']}`}>
					<a className={styles['sign-out__text']} href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;