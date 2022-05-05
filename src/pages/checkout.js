import { useContext } from "react";
import Head from "next/head";
import OrderItem from "components/OrderItem";
import AppContext from "context/AppContext";
import sumTotal from "utils/sumTotal";
import styles from "styles/Checkout.module.scss";

const Checkout = () => {
  const date = new Date();
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles.Checkout__container}>
          <h1 className={styles.Checkout__title}>My order</h1>
          <div className={styles.Checkout__content}>
            {cart.map((product, index) => (
              <OrderItem indexValue={index} product={product} key={index} />
            ))}
            <div className={styles.order}>
              <p className={styles.order__info}>
                <span className={styles.order__date}>
                  {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
                </span>
                <span className={styles.order__quantity}>{cart.length} articles</span>
              </p>
              <p className={styles.order__total}>$ {sumTotal(cart)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
