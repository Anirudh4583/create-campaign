import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import Products from './Components/Products';
import ImageUpload from './Components/ImageUpload';
import VideoUpload from './Components/videoUpload';
import db from './firebase';

import './App.css';
import Items from './Components/Items';

function App() {
  const [products, setProducts] = useState([1]);
  const [items, setItems] = useState([1]);

  const validationSchema = Yup.object().shape({
    campName: Yup.string().required('Campaign name is required'),
    campPlat: Yup.string().required('Campaign platform is required'),
    campDate: Yup.date().required('Campaign date is required'),

    prodName: Yup.string().required('Product name is required'),
    prodCost: Yup.number().required('Product cost is required'),
    prodLink: Yup.string().required('Product link is required'),

    delivType: Yup.string().required('Deliverable type is required'),
    delivInstr: Yup.string().required('Deliverable instructions is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const watchInput = watch('campName');

  function onSubmit(data, e) {
    console.log(data, e);
    alert(
      'SUCCESS!\n\n'
      //  + JSON.stringify(data, null, 4)
    );
    db.collection('forms')
      .doc('camp' + nanoid())
      .set(data);
  }

  function onError(data, e) {
    console.log(data, e);
  }

  return (
    <div className='App container-fluid rounded'>
      <div className='card'>
        <div className='card-header text-left bg-light fw-bold form-control-lg'>
          Create Campaign
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          onReset={() => {
            reset({
              campName: '',
              campPlat: '',
              campDate: '',

              prodName: '',
              prodCost: '',
              prodLink: '',

              delivType: '',
              delivInstr: '',
            });
          }}
          className='card-body'
        >
          <ul className='list-grou list-group-flush'>
            <li className='list-group-item'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Create Campaign</div>
                <div className='form-row row mb-3'>
                  <div className='form-group col-md-2 col-sm-3 has-validation'>
                    <label for='inputName'>Campaign Name*</label>
                    <input
                      type='text'
                      {...register('campName')}
                      // ref={register}
                      className={`form-control ${
                        errors.campName ? 'is-invalid' : ''
                      }`}
                      id='inputName'
                      placeholder='Campaign 1'
                      // required
                    />
                    <div className='invalid-feeback text-danger'>
                      {errors.campName?.message}
                    </div>
                  </div>
                  <div className='form-group col-md-2 col-sm-3'>
                    <label for='inputPlatform'>Platform*</label>
                    <select
                      {...register('campPlat')}
                      className={`form-control form-select ${
                        errors.campPlat ? 'is-invalid' : ''
                      }`}
                      id='inputPlatform'
                      // required
                    >
                      <option selected></option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Twitter</option>
                      <option>...</option>
                    </select>
                    <div className='invalid-feeback text-danger'>
                      {errors.campPlat?.message}
                    </div>
                  </div>
                  <div className='form-group col-md-2 col-sm-3'>
                    <label for='inputDate'>Date*</label>
                    <input
                      type='date'
                      {...register('campDate')}
                      className={`form-control ${
                        errors.camp?.campDate ? 'is-invalid' : ''
                      }`}
                      id='inputDate'
                      // required
                    />
                    <div className='invalid-feeback text-danger'>
                      {errors.campDate?.message}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='list-group-item'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Product</div>
                {products.map((product) => (
                  <Products
                    product={product}
                    register={register}
                    errors={errors}
                  />
                ))}
                <div className='form-row row'>
                  <button
                    type='button'
                    className='btn btn-link col-md-auto col-sm-3'
                    onClick={() => {
                      // console.log(products);
                      setProducts([
                        ...products,
                        products[products.length - 1] + 1,
                      ]);
                    }}
                    disabled={products.length === 5}
                  >
                    +Add Product
                  </button>
                  <button
                    type='button'
                    className='btn btn-link text-dark col-md-auto col-sm-3'
                    onClick={() => {
                      var temp1 = [...products];
                      temp1.pop();
                      // console.log(products);
                      setProducts(temp1);
                    }}
                    disabled={products.length === 1}
                  >
                    +Remove Product
                  </button>
                </div>
                <div className='form-group mt-3'>
                  <div className='form-check form-switch'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='inputRev'
                    />
                    <label className='form-check-label' for='inputRev'>
                      Send order for review
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li className='list-group-item'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Deliverables</div>
                {items.map((item) => (
                  <Items item={item} register={register} errors={errors} />
                ))}
                <div className='form-row row'>
                  <button
                    type='button'
                    className='btn btn-link col-md-auto col-sm-3'
                    onClick={() => {
                      // console.log(item);
                      setItems([...items, items[items.length - 1] + 1]);
                    }}
                    disabled={items.length === 3}
                  >
                    +Add Item
                  </button>
                  <button
                    type='button'
                    className='btn btn-link text-dark col-md-auto col-sm-3'
                    onClick={() => {
                      var temp2 = [...items];
                      temp2.pop();
                      // console.log(products);
                      setItems(temp2);
                    }}
                    disabled={items.length === 1}
                  >
                    +Remove Item
                  </button>
                </div>
              </div>
            </li>

            <li className='list-group-item'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Media</div>
                <div className='form-row row'>
                  <div className='col-md-3 col-sm-6'>
                    <ImageUpload />
                  </div>
                  <div className='col-md-3 col-sm-6'>
                    <VideoUpload />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='text-center'>
            <button type='submit' className='btn btn-primary mx-3'>
              Save Campaign
            </button>
            <button type='reset' className='btn btn-secondary mx-3'>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
