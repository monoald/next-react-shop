import logo from '@logos/logo_yard_sale.svg';
import styles from 'styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className={styles.NewPassword__container}>
				<img src={logo} alt="logo" className={styles.NewPassword__logo} />
				<h1 className={styles.NewPassword__title}>Create a new password</h1>
				<p className={styles.NewPassword__subtitle}>Enter a new passwrd for yue account</p>
				<form action="/" className={styles.NewPassword__form}>
					<label forhtml="password" className={styles.NewPassword__label}>Password</label>
					<input type="password" id="password" placeholder="*********" className={`${styles.NewPassword__input} ${styles['input-password']}`} />
					<label forhtml="new-password" className={styles.NewPassword__label}>Password</label>
					<input type="password" id="new-password" placeholder="*********" className={`${styles.NewPassword__input} ${styles['input-password']}`} />
					<input type="submit" value="Confirm" className={`${styles.button} ${styles['confirm-button']}`} />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;