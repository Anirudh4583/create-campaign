import React from 'react';

function Items({ item, register, errors }) {
  return (
    <div>
      <div key={`${item}type`} className='form-row row mb-2'>
        <div className='form-group col-md-auto col-sm-3'>
          <label for='inputDelType'>Deliverable type*</label>
          <select
            id='inputDelType'
            {...register('delivType')}
            // ref={register}
            className={`form-control ${errors.delivType ? 'is-invalid' : ''}`}
          >
            <option selected></option>
            <option>Story</option>
            <option>Post</option>
            <option>...</option>
          </select>
          <div className='invalid-feeback text-danger'>
            {errors.delivType?.message}
          </div>
        </div>
      </div>
      <div key={`${item}data`} className='form-row row mb-4'>
        <div className='form-group col-md-4 col-sm-6'>
          <label for='inputInst'>Instructions*</label>
          <textarea
            {...register('delivInstr')}
            // ref={register}
            className={`form-control ${errors.delivInstr ? 'is-invalid' : ''}`}
            id='inputInst'
            rows={3}
            placeholder='Add Instructions'
            // required
          />
          <div className='invalid-feeback text-danger'>
            {errors.delivInstr?.message}
          </div>
        </div>
        <div className='form-group col-2 col-sm-3'>
          <label for='inputDos'>Do's</label>
          <textarea
            className='form-control'
            id='inputDos'
            rows={3}
            placeholder='Example'
          />
        </div>
        <div className='form-group col-2 col-sm-3'>
          <label for='inputDonts'>Dont's</label>
          <textarea
            className='form-control'
            id='inputDonts'
            rows={3}
            placeholder='Example'
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
