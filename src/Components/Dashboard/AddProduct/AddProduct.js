import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    axios.post(` http://localhost:5000/addProducts`, data).then((res) => {
      console.log(res.data);

      alert('Product Added Successfully!');
    });
    console.log(data);
  };
  return (
    <div>
      <div className=' addProduct container text-start p-5'>
        <div className='row g-5'>
          <div className=' addProducts-form  '>
            <form
              style={{ marginInline: 200 }}
              className='mt-5 mb-5'
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className='my-5 text-white fw-bolder text-center '>
                Add Products
              </h3>
              <input
                style={{ width: '50%' }}
                type='text'
                placeholder='Title'
                {...register('title')}
              />
              <br />
              <br />
              <input
                style={{ width: '50%' }}
                type='text'
                placeholder='Date'
                {...register('date')}
              />

              <br />
              <br />
              <input
                style={{ width: '50%' }}
                type='text'
                placeholder='Image Url'
                {...register('image')}
              />
              <br />
              <br />
              <input
                style={{ width: '50%' }}
                type='text'
                placeholder='Price'
                {...register('price')}
              />
              <br />
              <br />
              <textarea
                style={{ width: '50%' }}
                placeholder='Description'
                {...register('description')}
              />
              <br />
              <br />
              <input type='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
