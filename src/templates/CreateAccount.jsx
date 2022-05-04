import styles from 'styles/CreateAccount.module.scss';

const CreateAccount = () => {
	return (
		<div className={styles.CreateAccount}>
			<div className={styles.CreateAccount__container}>
				<h1 className={styles.CreateAccount__title}>My account</h1>
				<form action="/" className={styles.CreateAccount__form}>
					<div>
						<label forhtml="name" className={styles.CreateAccount__label}>Name</label>
						<input type="text" id="name" placeholder="Teff" className={`${styles.CreateAccount__input} ${styles['input-name']}`} />
						<label forhtml="email" className={styles.CreateAccount__label}>Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className={`${styles.CreateAccount__input} ${styles['input-email']}`} />
						<label forhtml="password" className={styles.CreateAccount__label}>Password</label>
						<input type="password" id="password" placeholder="*********" className={`${styles.CreateAccount__input} ${styles['input-password']}`} />
					</div>
					<input type="submit" value="Create" className={`${styles.CreateAccount__button} ${styles['create-button']}`} />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;