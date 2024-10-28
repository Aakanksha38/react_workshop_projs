import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
/**
 * when we console the color , we got rgb, weight,type,hex
 * with rgb = we show colour
 * with weight = we show % of that color
 * in rgb , we have 3 elements , 0,1,2- by combining/joining all we can make a color which can actually display on screen
 * to copy the color-code - we want onclick, oncick on whole block n u can copy the code 
 * copied to clipboard should be there for only few secs, wht to do? useeffect =>based on state change we want to show n hide , simetimeout= should be there for few secs
 * now , here initally when we go to screen no color shade appears , but there should be any default color shade to be displayed on screen ==>>
 * **/
const SingleColor = ({hexColor, rgb, alpha, type, weight}) => {
  const [alert , setAlert] = useState(false); // for alert = copied to clipboard
  const bcg = rgb.join(",");
  //console.log(hexColor);
  const hexValue = `#${hexColor}` ;
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setAlert(false);
    },2000);
    return () => clearTimeout(timeOut);
  },[alert]);
  return (
    <article
      className={`color`}
      style= {{backgroundColor: `rgb(${bcg})`}}
      onClick={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p> } 
    </article>
  );
}

export default SingleColor
