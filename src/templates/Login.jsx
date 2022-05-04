import { useRef } from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from 'styles/Login.module.scss'

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }
  return (
    <div className={styles.Login}>
			<div className={styles.Login__container}>
				<Image src={logo} alt="logo" className={styles.Login__logo} />
				<form action="/" className={styles.form} ref={form}>
					<label htmlFor="email" className={styles.Login__label}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={`${styles.Login__input} ${styles['input-email']}`} />
					<label htmlFor="password" className={styles.Login__label}>Password</label>
					<input type="password" name="password" placeholder="*********" className={`${styles.Login__input} ${styles['input-password']}`} />
					<button onClick={handleSubmit} className={`${styles['primary-button']} ${styles.Login__button}`}>
            Log in
					</button>
					<a className={styles['form__forgot-pswd']} href="/">Forgot my password</a>
				</form>
				<button className={`${styles['secondary-button']} ${styles['signup-button']}`}>
					Sign up
				</button>
			</div>
		</div >


  )
}

export default Login