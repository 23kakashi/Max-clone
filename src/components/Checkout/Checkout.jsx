import React from 'react'
import CheckoutHeader from './CheckoutHeader.jsx'
import ShippingMethod from './ShippingMethod.jsx'
import Payment_method from './Payment_method.jsx'
import Payment_other from './Payment_other.jsx'
import classes from "./Checkout.module.css";
import Summary from './Summary.jsx'
import Ways from './Ways.jsx'
const Checkout = () => {
  return (

    <div  >
      <div>
        <CheckoutHeader />
      </div>

     <div className={classes.mainbar}>
     <div className={classes.leftbar}>
      <div >
        <ShippingMethod />
      </div>
      <div>
       <Payment_method/>
      </div>
      <div>
    <Payment_other/>
      </div>
      </div>
      <div className={ classes.righbar}>
       <Summary/>
       <Ways/>
      </div>
     </div>
     
      
    </div>



  )
}

export default Checkout