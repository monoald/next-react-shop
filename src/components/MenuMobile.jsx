import { useContext } from "react";
import Image from "next/image";
import closeIcon from "@icons/icon_close.png";
import styles from "styles/MenuMobile.module.scss";
import Link from "next/link";
import AppContext from "context/AppContext";

const MenuMobile = () => {
  const { hideMobileMenu } = useContext(AppContext);

  return (
    <div className={styles.MobileMenu}>
      <figure className={styles.MobileMenu__close}>
        <Image className={styles.MobileMenu__image}
        src={closeIcon} alt="Close menu"
        onClick={hideMobileMenu}
        onKeyDown={hideMobileMenu} 
        />
      </figure>
      <ul className={`${styles.MobileMenu__categories} ${styles.list}`}>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>CATEGORIES</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>All</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>Clothes</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>Electronics</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>Furnitures</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>Toys</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>Others</span>
          </Link>
        </li>
      </ul>
      <ul className={`${styles.MobileMenu__account} ${styles.list}`}>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>My orders</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={styles.list__link}>My account</span>
          </Link>
        </li>
      </ul>
      <ul className={`${styles.MobileMenu__info} ${styles.list}`}>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={`${styles.list__link} ${styles.email}`}>Calos.aldazosa@outlook.com</span>
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/">
            <span className={`${styles.list__link} ${styles['sign-out']}`}>Sign out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
