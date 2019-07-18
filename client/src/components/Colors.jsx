import React from "react";
import style from '../style.css'

const Colors = (props) => {
  return (
    <div>
      {
        props.colors.map((color, i) => {
          return (
            <div className={style["colorCont"]} key={i}>
              <button onClick={props.changeColor} className={style["color"]} style={{backgroundColor: color}} value={color} ></button>
            </div>
          )
        })
      }
    </div>
  )
};

export default Colors;

