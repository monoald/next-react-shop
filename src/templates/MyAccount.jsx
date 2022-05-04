import styles from 'styles/MyAccount.module.scss';

const MyAccount = () => {
	return (
		<div className={styles.MyAccount}>
		<div className={styles.MyAccount__container}>
			<h1 className={styles.MyAccount__title}>My account</h1>
			<form action="/" className={styles.MyAccount__form}>
					<div>
					<label forhtml="name" className={styles.MyAccount__label}>Name</label>
					<p className={styles.MyAccount__value}>Camila Yokoo</p>
					<label forhtml="email" className={styles.MyAccount__label}>Email</label>
					<p className={styles.MyAccount__value}>camilayokoo@gmail.com</p>
					<label forhtml="password" className={styles.MyAccount__label}>Password</label>
					<p className={styles.MyAccount__value}>*********</p>
					</div>
				<input type="submit" value="Edit" className={`${styles.button} ${styles['edit-button']}`} />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;