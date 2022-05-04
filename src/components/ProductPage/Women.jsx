import React from 'react'
import data from "./data.json";
import style from "./women.module.css"

const Women = () => {
    console.log(data);

        const listItems = data.map((item)=>
    <div className={style.main}>
    <div className={style.inside}>
        
        <div className={style.card} key={item.id}>
    
            <div className= {style.card_img}>
                <img src ={item.image_url} />
            </div>
            <div className={style.card_header}>
                <h2>{item.name}</h2>
                <p className={style.price}>{item.price}</p>
                <button className={style.btn}>ADD TO BASKET</button>
            </div>
            </div>
    </div>
    
    
    
    </div>
        )
  return (
    <>
    <div className={style.main_content}></div>
    <h1>Tops</h1>
    {listItems}

    </>
  )
}

export default Women