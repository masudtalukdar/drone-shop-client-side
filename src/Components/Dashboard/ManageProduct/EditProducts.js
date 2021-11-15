import { Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditProducts = ({ product, setReload }) => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .patch(`http://localhost:5000/updateProduct/${product._id}`, data)
      .then((res) => {
        console.log(res.data);
        setReload(res.data);
        setEdit(false);
      });
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/deleteProduct/${product._id}`)
      .then((res) => {
        console.log(res.data);
        setReload(res.data);
        setEdit(false);
      });
  };

  return (
    <div class='col'>
      {edit ? (
        <form
          className='mt-5 bg-warning p-2 '
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='m-3'>
            <input
              defaultValue={product.title}
              type='text'
              placeholder='Product Name'
              {...register('title')}
            />
          </div>
          <div className='m-3'>
            <input
              defaultValue={product.date}
              type='text'
              placeholder='date'
              {...register('date')}
            />
          </div>
          <div>
            <input
              defaultValue={product.price}
              type='text'
              placeholder='Price'
              {...register('price')}
            />
          </div>
          <div>
            <input
              className='m-3'
              defaultValue={product.image}
              type='text'
              placeholder='Image Url'
              {...register('image')}
            />
            <textarea
              defaultValue={product.description}
              style={{ width: '80%' }}
              placeholder='Description'
              {...register('description')}
            />
          </div>
          <div className='d-flex justify-content-between align-items-center mx-5'>
            {' '}
            <button className='save btn btn-success' type='submit'>
              Save{' '}
            </button>
            <button onClick={handleDelete} className='btn btn-danger'>
              Delete
            </button>
          </div>
        </form>
      ) : (
        <div class='card h-100 p-3'>
          <h5 class='card-title'>{product.title}</h5>
          <span>{product.date} </span>
          <img
            // style={{ height: 350 }}
            src={product.image}
            class='card-img-top'
            alt='...'
          />
          <div class='card-body'>
            <Divider />

            <Typography variant='h6' color='inherit'>
              {product.description}
            </Typography>
            <Divider />
            <Typography variant='h4' color='warning.main'>
              $<span>{product.price}</span>
            </Typography>
          </div>
          <div class='card-footer'>
            <button onClick={() => setEdit(true)} className='btn btn-danger'>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProducts;
