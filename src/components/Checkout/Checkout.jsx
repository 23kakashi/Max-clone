import React from 'react'
import CheckoutHeader from './CheckoutHeader.jsx'
import ShippingMethod from './ShippingMethod.jsx'
import Payment_method from './Payment_method.jsx'
const Checkout = () => {
  return (

    <div>
      <div>
        <CheckoutHeader />
      </div>
      <div>
        <ShippingMethod />
      </div>
      <div>
       <Payment_method/>
      </div>
    </div>



  )
}

export default Checkout