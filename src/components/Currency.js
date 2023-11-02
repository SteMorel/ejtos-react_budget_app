import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch, currency } = useContext(AppContext);

  const handleSelectChange = event => {
    //     // get the value of the clicked on option
    //     // then dispatch an event to update the currency in the store
       const newCurrency = event.target.value;
       // BUG: Once I dispatch the event, the rest of the UI does not update
       dispatch({
        type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

  return (
    <div className='alert alert-secondary'>  
    <span>
      <select 
        className='btn btn-success dropdown-toggle'
        id='currency'
        onChange={(event) =>handleSelectChange(event)}>Currency ({currency})
          <option defaultValue={currency}>Currency ({currency})</option>
          <option value='£'>£ Pound</option>
          <option value='$'>$ Dollar</option>
          <option value='€'>€ Euro</option>
          <option value='₹'>₹ Rupee</option>
      </select>
      </span>
    </div>



  );
};

export default Currency;