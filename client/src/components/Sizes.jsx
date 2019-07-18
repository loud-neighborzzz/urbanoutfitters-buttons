import React from "react";
import style from '../style.css'

const Sizes = (props) => {
  return (
    <div>
      {
        props.sizes.map((size, i) => {
          return (
            <div className={style["sizeCont"]}   key={i}>
              <button onClick={props.changeSize} value={size} className={style["size"]}>{size}</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Sizes;

