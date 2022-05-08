import React from 'react'
import classes from "./Checkout.module.css"
const Payment_method = () => {
  return (
 <div className={classes.payment_method}>
     <p style={{fontSize:"24px",fontWeight:"bold"}}>Select a payment method</p>
     <label>
         <div className={classes.payment_method2}>
         <div><img style={{marginTop:"15px"}} src='https://i1.lmsin.net/website_images/ae/checkout/card-payment.svg'></img></div>
         <div><strong>Credit/Debit Card</strong><br></br>
         <span>Use your Credit or Debit card</span></div>
         </div>
         <div className={classes.payment_method3}>
         <form>
         <strong >Card Number</strong><br></br>
          <input type="number" placeholder='Enter your 16 digit card number' ></input><br></br>
          <strong >Name on Card</strong><br></br>
          <input type="text" placeholder='Name on Card' ></input><br></br>
          
         </form>
         </div>
     </label>
 </div>
  )
}

export default Payment_method
