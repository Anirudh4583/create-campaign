import React from 'react';

function Products({ product, register, errors }) {
  return (
    <div>
      <div key={product} className='form-row row'>
        <div className='form-group col-md-2 col-sm-3'>
          <label for={`inputName[${product}]`}>Product Name*</label>
          <input
            type='text'
            {...register('prodName')}
            // ref={register}
            className={`form-control ${errors.prodName ? 'is-invalid' : ''}`}
            id={`inputName[${product}]`}
            placeholder={`Campaign ${product}`}
            // required
          />
          <div className='invalid-feeback text-danger'>
            {errors.prodName?.message}
          </div>
        </div>
        <div className='form-group col-md-2 col-sm-3'>
          <label for={`inputCost[${product}]`}>Cost*</label>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='basic-addon1'>
                ₹
              </span>
            </div>
            <input
              type='text'
              {...register('prodCost')}
              className={`form-control ${errors.prodCost ? 'is-invalid' : ''}`}
              id={`inputCost[${product}]`}
              aria-describedby='basic-addon'
              // required
            />
            <div className='invalid-feeback text-danger'>
              {errors.prodCost?.message}
            </div>
          </div>
        </div>
        <div className='form-group col-md-2 col-sm-3'>
          <label for={`inputLink[${product}]`}>Product Link*</label>
          <input
            type='text'
            {...register('prodLink')}
            className={`form-control ${errors.prodLink ? 'is-invalid' : ''}`}
            id={`inputLink[${product}]`}
            placeholder={`campaign${product}.com`}
            // required
          />
          <div className='invalid-feeback text-danger'>
            {errors.prodLink?.message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
