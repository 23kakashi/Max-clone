import React, { useState } from 'react'

// import styled from 'styled-components';
// import { Inputs } from './form.styled';
import { useToast } from '@chakra-ui/react'
import Popup from 'reactjs-popup';
import { Input,InputGroup,InputLeftAddon, PinInput, PinInputField } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'



const Sign = () => {
  const toast = useToast()
  // const statuses = ['success', 'error']
  
    const [formData,setForm]=useState("");
   var obj=[];
   
 
 
  
  

     
   

   
    const handleForm=(e)=>{
        e.preventDefault();
        obj.push(formData)
        localStorage.setItem("data",JSON.stringify(obj))

      
       
    }

    const handleClick=(e)=>{
  const inputChange=e.target.name;
  setForm({...formData,[inputChange]:e.target.value})
      
    }
  return (
  
    <Popup  trigger={<><div style={{marginLeft:"20px",margin:"auto",height:"400px",width:"600px",border:"1px solid white",borderRadius:"5px",marginTop:"50px",fontSize:"50px",paddingLeft:"10px"}}>
   <h1>Sign-In Signup</h1>
   <p style={{fontSize:"15px"}}>Enjoy the convenience of a single account across all participating brands</p>
   <p style={{fontSize:"15px",fontWeight:"bold"}}>Mobile Number</p>
     <form  onSubmit={handleForm} >
     {/* <Inputs type="text" name="username" placeholder='Enter Username' onChange={handleClick}></Inputs>
     <Inputs type="password" name="password"  placeholder='Enter Password' onChange={handleClick}></Inputs> */}
   
<InputGroup  size='lg' border='2px solid blue' >
 <InputLeftAddon  border='none'children='+91' />
 <Input type='tel' border='none' name="mobileNumber" placeholder='phone number' onChange={handleClick}/>
</InputGroup>
<InputGroup size='lg'>

<Input type='text'  name="Name" placeholder=' Enter Name' onChange={handleClick}/>

</InputGroup>
<Popup trigger={<Button 
 size='md'
height='48px'
width='200px'

fontSize="2xl"
position="center"
marginLeft="50px" 
color="blue"


> 
<input type="submit"/>
</Button>}>
  
  <div style={{marginTop:"20px",}}>
  <h1>Enter The OTP</h1>
    
    <PinInput  >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField  />
     </PinInput>
  </div>


 
</Popup>


</form>


<p style={{fontSize:"15px"}}>By creating your account you agree to our <a href="https://www.maxfashion.in/in/en/termsandconditions" style={{color:"blue"}}>Terms and Condition</a></p>


<Button
    onClick={() =>
     toast({
       title: 'Account created.',
       description: "We've created your account for you.",
       status: 'success',
       duration: 9000,
       isClosable: true,
     })
   }
 >
   submit
  
 </Button>



   

</div>

 </>}>
      
   
</Popup>
    
  

  
  

  )
}

export default Sign





