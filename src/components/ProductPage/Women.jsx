import React from 'react'
import data from "./data.json";
import style from "./women.module.css"

const Women = () => {
    console.log(data);


    return (
        <>
            <h1 className={style.TopHead}>Tops</h1>

            <div className={style.main}>
                {data.map((item) =>

                    <div className={style.card} key={item.id}>

                        <div className={style.card_img}>
                            <img src={item.image_url} />
                        </div>
                        <div className={style.card_header}>
                            <h3 className={style.price}>{"₹"+item.price}</h3>
                            <p>{item.name}</p>
                            <button className={style.btn}>ADD TO BASKET</button>
                        </div>
                    </div>
    )}
    </div>

        </>
    )
}

export default Women;