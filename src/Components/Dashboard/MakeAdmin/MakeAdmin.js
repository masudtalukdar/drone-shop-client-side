import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    axios
      .post(` https://mighty-headland-58839.herokuapp.com/addAdmin`, data)
      .then((res) => {
        console.log(res.data);

        alert('Admin Added Successfully!');
      });
    console.log(data);
  };
  return (
    <div className=' makeAdmin p-3'>
      <form
        style={{ marginInline: 200 }}
        className='mt-5 mb-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h5 className='my-5 text-white fw-bolder text-center '>Add Admin</h5>
        <input
          style={{ width: '50%' }}
          type='text'
          placeholder='Admin Email'
          {...register('admin_email')}
        />
        <br />
        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default MakeAdmin;
<h2>make an admin</h2>;
