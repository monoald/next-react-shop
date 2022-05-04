import { useState, useContext } from 'react';
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
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const { state: {cart} } = useContext(AppContext);

  const handleToggle = (func, obj) => {
    func(!obj);
  }

  return (
    <header className={styles.Header}>
      <img src={menuIcon} alt="menu" className={styles.menu} onClick={() => handleToggle(setToggleMenuMobile, toggleMenuMobile)} />
      <div className={`${styles['navbar-left']} ${styles.Header__navbar}`}>
        <img src={logo} alt="logo" className={styles.Header__logo} />
        <ul className={styles.list}>
          <li>
            <a className={styles.list__item} href="/">All</a>
          </li>
          <li>
            <a className={styles.list__item} href="/">Clothes</a>
          </li>
          <li>
            <a className={styles.list__item} href="/">Electronics</a>
          </li>
          <li>
            <a className={styles.list__item} href="/">Furnitures</a>
          </li>
          <li>
            <a className={styles.list__item} href="/">Toys</a>
          </li>
          <li>
            <a className={styles.list__item} href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={`styles['navbar-right'] ${styles.Header__navbar}`}>
        <ul className={styles.list}>
          <li className={styles.list__email} onClick={() => handleToggle(setToggle, toggle)}>
            platzi@example.com
          </li>
          <li className={styles['shopping-cart']} onClick={() => handleToggle(setToggleOrders, toggleOrders)}>
            <img className={styles['shopping-cart__icon']} src={cartIcon} alt="shoping cart" />
            {cart.length > 0 && <div className={styles['shopping-cart__quantity']}>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
      { toggleMenuMobile && <MenuMobile /> }
    </header>
  );
};

export default Header;
