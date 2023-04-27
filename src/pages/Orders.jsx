import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import AppContext from '../context';
import { useCart } from "../hooks/useCart";

function Orders() {
  const {totalPrice} = useCart()
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const tax = Math.round((totalPrice / 100) * 5 * 100) / 100;
  const grandTotal = (parseFloat(totalPrice) + tax).toFixed(2);

  const clearOrders = async () => {
    try {
      const deletePromises = orders.map((order) =>
        axios.delete(`https://64276eb346fd35eb7c3fbedd.mockapi.io/orders/${order.id}`)
      );
      await Promise.all(deletePromises);
      setOrders([]);
    } catch (error) {
      alert('Ошибка при удалении заказов');
      console.error(error);
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://64276eb346fd35eb7c3fbedd.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders</h1>
      </div>

      {orders.length > 0 ? (
        <div className="d-flex flex-wrap ">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
          <div className="orderButtons">
            <div>
              <button className="removeButton" onClick={clearOrders}>
                <a>Clear Cart
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#DBDBDB"/>
                    <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                  </svg>
                </a>
              </button>
             <button className="buyButton">
              <Link to="/checkout">
                  Checkout <b>{grandTotal} $</b>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </Link>
            </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: '50vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <h2>You don't have any orders yet</h2>
          <img
            src="img/empty-cart.jpg"
            alt="Empty orders"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Orders;




   



 


