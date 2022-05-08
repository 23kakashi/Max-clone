import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import { Button } from '@chakra-ui/react'
import { BiRupee } from 'react-icons/bi';
const Basket = () => {
    const [data,setItems]=useState([])
    console.log(data)
    useEffect(()=>{
        //  let items= JSON.parse(localStorage.getItem("cartitems")); 
        let cartitems=[{
            image:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
             Size:"xl",
             Name:"Reebok Dress for Men",
             Price:349  
        }]
     setItems(cartitems)
    },[])
 
  return (

    <Popup trigger={<button style={{textAlign:"center",marginLeft:"100px"}}>Basket</button>}>
        
        <div style={{height:"auto",width:"400px",border:"white",marginLeft:"200px",padding:"5px 5px 0px 5px",background:"white"}}>
        <p style={{fontWeight:"bold"}}>Items Count:{data.length}</p>
            <div style={{border:" 1px solid black",fontWeight:"bold",paddingLeft:"3px"}}> 
           <p> <p style={{color:'red'}}> MISSED OFFER:</p>Get 10% Off on shopping for Kidswear worth 999 & above, code- KIDS10</p>
           </div>
           <div style={{border:"1px solid black",fontWeight:"bold",paddingLeft:"3px"}}> 
           <p> <p style={{color:'red'}}> MISSED OFFER:</p> Flat 200 Off on shopping worth 1999 & above, code- MAX2000</p>
           </div>
           <div style={{border:"1px solid black",fontWeight:"bold",paddingLeft:"3px"}}> 
           <p> <p style={{color:'red'}}> MISSED OFFER:</p> Flat 100 Off on 999 & above orders, code- NEW100 (First purchase only) </p>
           </div>
        
           {data.map((item)=>{
               return( 
                   <>
                   <div style={{display:"flex",border:"1px solid black"}}>
                   <img src={item.image} alt=""  height="60px" width="80px"/>
                   <div style={{paddingLeft:"10px"}}>
                       <div style={{display:"flex"}}> <p style={{ fontSize:"30px"}}><BiRupee/></p> <p style={{fontSize:"20px",fontWeight:"bold"}}>  {item.Price}</p></div>
                       
                       <p>{item.Name}</p>
                       <p>Size:-{item.Size}</p>
                   </div>


                </div>
               
                </>
               );
            
            

           })}
            
               
            <Button colorScheme='blue' variant='solid'>CHECKOUT</Button>   

            
      
        </div>

    </Popup>
    
  )
}

export default Basket


///import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';cd
//BiRupee