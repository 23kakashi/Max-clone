import React from 'react'
import CheckoutHeader from './CheckoutHeader.jsx'
import ShippingMethod from './ShippingMethod.jsx'
const Checkout = () => {
  return (

      <div>
      <div> 
         <CheckoutHeader />
      </div>
      <div>
        <ShippingMethod />
      </div>
    </div>



  )
}

export default Checkout