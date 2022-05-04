
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';
import styles from 'styles/PasswordRecovery.module.scss';

const RecoveryPassword = () => {
  return (
    <div className={styles.PasswdRecovery}>
      <div className={styles.PasswdRecovery__form}>
        <Image src={logo} alt="logo" className={styles.PasswdRecovery__logo} />
        <h1 className={styles.PasswdRecovery__title}>Email has been sent!</h1>
        <p className={styles.PasswdRecovery__subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={styles['PasswdRecovery__email-image']}>
          <Image className={styles.icon} src={emailIcon} alt="email" />
        </div>
        <button className={styles['primary-button']}>Back</button>
        <p className={styles.resend}>
          <span className={styles.resend__text}>Didn't receive the email?</span>
          <a className={styles.resend__link} href="/">Resend</a>
        </p>
      </div>
    </div>
  )
}

export default RecoveryPassword