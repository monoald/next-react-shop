import Link from 'next/link';
import styles from 'styles/Menu.module.scss';

const Menu = () => {
	return (
		<div className={`Menu ${styles.Menu}`}>
			<ul className={styles.Menu__list}>
				<li className={styles['list-item']}>
					<Link href="/">
						<span  className={styles['list-item__element']}>My orders</span>
					</Link>
				</li>
				<li className={styles['list-item']}>
					<Link href="/">
						<span  className={styles['list-item__element']}>My account</span>
					</Link>
				</li>
				<li className={`${styles['list-item']} ${styles['sign-out']}`}>
					<Link href="/">
						<span className={styles['sign-out__text']} >Sign out</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;