import React from "react"
import {LeftSide} from "./LeftSide"
import {RightSide} from "./RightSide"





export const Basket =()=>{
  const bsk=[


    {
      id:0,
      image_url:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010273780-Red-RED-1000010273780-29122021_01-2100.jpg",
      name: "MEN'S PALM ANGLES TRACK JACKET",
      size: "L",
      brand: "PALM ANGLE",
      category: "Max Printed shirt",
      color: "Red",
      rating: "★★★",
      price: 745,
      strikedoffprice: 1259 
    },
  
  
    {
      "id":1,
      "image_url":
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010373162-Pink-Pink-1000010373162-9152021_01-2100.jpg",
      name: "MEN'S HERON PRESTON T-SHIRT ",
      size: "XS",
      brand: "HERON PRESTON",
      category: "Max Printed shirt alzaba",
      color: "Green",
      rating: "★★★★",
      price: 445,
      strikedoffprice: 999   
    },
  
  
    {
      "id":2,
      "image_url":
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010829364-Black-BLACK-1000010829364-5012022_01-2100.jpg",
      name: " Wales Bonner Power geometric-print trousers",
      size: "XL",
      brand: "WALES BONNER",
      category: "Max Printed shirt censtor",
      color: "Black",
      rating: "★★",
      price: 801,
      strikedoffprice: 1090
    },
  
  
    
  
  
    {
      "id":4,
      "image_url":
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010976724-White-WHITE-1000010976724-5012022_01-2100.jpg",
      name: "JW Anderson x Pol Anglada appliqué-logo shirt ",
      size: "XL",
      brand: "PALM ANGLE",
      category: "Max Printed shirt liner",
      color: "Black",
      rating: "★★★★★",
      price: 1620,
      strikedoffprice: 2359 
    },
    {
      id:3,
      image_url:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010665310-Green-GREEN-1000010665310-8122021_01-2100.jpg",
    name:"Alexander McQueen intarsia-pattern cardigan",
    size :"S",
    brand :"WALES BONNER",
    category :"Max Printed shirt Ultrasleem",
    color: "Pink",
      rating: "★★★★★",
      price: 399,
      strikedoffprice: 799   
    },
  
  
    {
      "id":5,
      "image_url":
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010861398-Black-BLACK-1000010861398-3012022_01-2100.jpg",
      name: " Marni herringbone-effect jacket ",
      size: "XL",
      brand: "WALES BONNER",
      category: "Max Printed shirt joshno",
      color: "White",
      rating: "★",
      price: 1440,
      strikedoffprice: 3119 
    },
  
  
    {
      "id":6,
      "image_url":
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010252152-Blue-Navy-1000010252152-7222021_01-2100.jpg",
      name: " MEN'S Gervon check-print overshirt ",
      size: "XXL",
      brand: "WALES BONNER",
      color: "Red",
      rating: "★★★",
      price: 1999,
      Category: "Max Pinted shirt yinsto",
      strikedoffprice: 2819 
    },
  ]

const [data,setdata]=React.useState(bsk);
const [total,setTotal] =React.useState(0)

const handleFilter=(id)=>{
    const newData= data.filter((item) =>{
        return item.id!= id
    })

    setdata(newData)
}
const maindiv={
  display:"flex",
  width:"80%",
  margin:"auto",
  justifyContent:"space-between"

}

const leftdiv={
  width:"55%",
}


const rightdiv={
  width:"40%",
}


React.useEffect(()=>{
    console.log("x")
    setTotal(data.map(item => item.price).reduce((prev, curr) => prev + curr, 0));
},[])


   


console.log(total)


return(
 
  <>
  <div>
  <h1 style={{fontSize:"40px", margin:"10px"}}>Your Shopping Basket</h1>
  <br />
  <hr />
  <br />
  <h2 style={{fontSize:"20px", fontWeight:"bolder", margin:"10px"}}>{data.length} Products</h2>
  <br />
  </div>
  <div style={maindiv}>
  <div style={leftdiv}>
  {data.map((item)=>{
    return <LeftSide data={item} key={item.id} setData={setdata} filter={handleFilter} total={total} setTotal={setTotal} /> 
  })}
  </div>
  <div style={rightdiv}>
    <RightSide total ={total}/>
  </div>
  </div>

   
  
  </>
)
}