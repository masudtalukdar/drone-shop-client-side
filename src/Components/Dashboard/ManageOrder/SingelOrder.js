import axios from 'axios';
import React, { useState } from 'react';

const SingelOrder = ({ order, setReload }) => {
  const [status, setStatus] = useState(order.status);
  const handleChange = (event) => {
    setStatus(event.target.value);
    const value = { status: event.target.value };
    console.log(value);
    axios
      .patch(`http://localhost:5000/updateStatus/${order._id}`, value)
      .then((res) => {
        console.log(res.data);
        setReload(res.data);
      });
  };
  return (
    <div className='bg-success'>
      <div className='single-info text-start'>
        <div className='d-flex justify-content-between'>
          <h5>Name: {order.name}</h5>
          <h5>Contact-Mail: {order.email}</h5>
        </div>
        <div className='d-flex justify-content-between'>
          <h5>Phone Number: {order.phone}</h5>
        </div>
        <div className='d-flex justify-content-between text-start'>
          <h6>
            Status:{' '}
            <select value={status} onChange={handleChange}>
              <option value='pending'>pending</option>
              <option value='on shipping'>on shipping</option>
              <option value='delivered'>delivered</option>
              Status={status}
            </select>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SingelOrder;
