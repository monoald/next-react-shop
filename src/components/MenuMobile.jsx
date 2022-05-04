import { useState } from 'react';
import Image from 'next/image';
import closeIcon from '@icons/icon_close.png'
import styles from 'styles/MenuMobile.module.scss'

const MenuMobile = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (func, obj) => {
    func(!obj);
  }

  if (toggle) {
    return (
      <div className={styles.MobileMenu}>
        <figure onClick={() => handleToggle(setToggle, toggle)} className={styles.MobileMenu__close}>
          <Image className={styles.MobileMenu__image} src={closeIcon} alt="Close menu" />
        </figure>
        <ul className={`${styles.MobileMenu__categories} ${styles.list}`}>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">CATEGORIES</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">All</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">Clothes</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">Electronics</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">Furnitures</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">Toys</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">Others</a>
          </li>
        </ul>
        <ul className={`${styles.MobileMenu__account} ${styles.list}`}>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">My orders</a>
          </li>
          <li className={styles.list__item}>
            <a className={styles.list__link} href="/">My account</a>
          </li>
        </ul>
        <ul className={`${styles.MobileMenu__info} ${styles.list}`}>
          <li className={styles.list__item}>
            <a className={`${styles.list__link} ${styles.email}`} href="/" >Calos.aldazosa@outlook.com</a>
          </li>
          <li className={styles.list__item}>
            <a className={`${styles.list__link} ${styles.sign-out}`} href="/" >Sign out</a>
          </li>
        </ul>
      </div>
  
    )
    
  }

}

export default MenuMobile