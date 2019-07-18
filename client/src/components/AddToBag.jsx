import React from "react";
import style from '../style.css'

const items = (num) => {
  if (num <= 2){
    return 'item added to your bag';
  } else {
    return 'items added to your bag';
  }
};

const AddToBag = (props) => {
  return (
    <div> 
      {
        props.data.map((item, i) => {
          return ( 
            <div className={style["bigBox"]} key={i} id={`${item.id}`}>
              <div className={style["text"]}>
                <p className={style["quatity"]}> {item.selectedQty} {items(item.selectedQty)} </p>
                <p> {item.name} </p>
                <p> {item.price}</p>

                <p> Color: {item.selectedColor || item.colors[0]}</p>
                <p> Size: { item.selectedSize || item.sizes[0] }</p>
                <button className={style["checkout"]}> Checkout </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AddToBag;
