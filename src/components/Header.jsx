import { useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from 'context/AppContext';
import Menu from 'components/Menu';
import MyOrder from 'containers/MyOrder';
import MenuMobile from 'components/MenuMobile';
import cartIcon from '@icons/icon_shopping_cart.svg';
import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import styles from 'styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state: {cart} } = useContext(AppContext);
  const { state: {mobileMenu} } = useContext(AppContext);
  const { showMobileMenu } = useContext(AppContext);

  const handleToggle = (func, obj) => {
    func(!obj);
  };

  return (
    <header className={styles.Header}>
      <button className={styles['menu-icon-container']}
      onClick={showMobileMenu} 
      onKeyDown={showMobileMenu} 
      >
      <img src={menuIcon.src} alt="menu" className={styles.menu} 
      />
      </button>
      <div className={`${styles['navbar-left']} ${styles.Header__navbar}`}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles.Header__logo} />
        </Link>
        <ul className={styles.list}>
          <li>
            <Link href="/" >
            <span className={styles.list__item}>All</span>
            </Link>
          </li>
          <li>
            <Link href="/" >
            <span className={styles.list__item}>Clothes</span>
            </Link>
          </li>
          <li>
            <Link href="/" >
            <span className={styles.list__item}>Electronics</span>
            </Link>
          </li>
          <li>
            <Link href="/" >
            <span className={styles.list__item}>Furnitures</span>
            </Link>
          </li>
          <li>
            <Link href="/" >
            <span className={styles.list__item}>Toys</span>
            </Link>
          </li>
          <li>
            <Link href="/" >
            <span className={styles.list__item}>Others</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles['navbar-right']} ${styles.Header__navbar}`}>
        <ul className={styles.list}>
          <li className={styles.list__email}>
            <textbox 
            onClick={() => handleToggle(setToggle, toggle)}
            onKeyDown={() => handleToggle(setToggle, toggle)}>
              platzi@example.com
            </textbox>
          </li>
          <li className={styles['shopping-cart']}>
            <Image className={styles['shopping-cart__icon']} 
            src={cartIcon} alt="shoping cart"
            onClick={() => handleToggle(setToggleOrders, toggleOrders)}
            onKeyDown={() => handleToggle(setToggleOrders, toggleOrders)} />
            {cart.length > 0 && <div className={styles['shopping-cart__quantity']}>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <BrowserRouter >  <Menu /> </BrowserRouter>}
      {toggleOrders && <BrowserRouter >  <MyOrder /> </BrowserRouter>}
      { mobileMenu && <BrowserRouter > <MenuMobile /> </BrowserRouter>  }
    </header>
  );
};

export default Header;
