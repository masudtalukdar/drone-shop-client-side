import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelOrder from './SingelOrder';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/allOrders')
      .then((res) => setOrders(res.data));
  }, [reload]);

  console.log(orders);
  return (
    <div>
      <h1> Manage Orders</h1>
      <div className=' container '>
        <div className=' '>
          <div class='row row-cols-1 row-cols-md-12 g-4'>
            {orders.map((order) => (
              <SingelOrder
                setReload={setReload}
                key={order._id}
                order={order}
              ></SingelOrder>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
