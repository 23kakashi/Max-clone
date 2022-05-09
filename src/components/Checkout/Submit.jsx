import React from 'react'
import classes from "./Checkout.module.css"
function Submit() {
  return (
    <div className={classes.submit}>
       <div> <p>By clicking on Proceed to Payment, you agree to our Terms and Conditions</p></div>
       <div className={classes.submitBtn}> <button>Pay Now</button></div>
    </div>
  )
}

export default Submit