import React, { useState } from 'react';

const Tour = ({id, name,info,image,price,removeTourId}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0,200)}...`}</p>
        <button onClick={()=>{setReadMore(!readMore)}}>{readMore ? "show Less" : "show More"}</button>
        <button className='delete-btn' onClick={()=> removeTourId(id)}>not interested</button>
      </footer>
      
    </article>
  )
};

export default Tour;

/*
<p>{readMore ? info : `${info.substring(0,200)}...`}</p>
        <button onClick={()=>{setReadMore(!readMore)}}>{readMore ? "show Less" : "show More"}</button>
 here , what we are trying to do is :
 readmore is flase by default thn we r trimming the long para into shorter 
 n we want that to read whole long thn , we given btn - when clicked long n shorter para will be displayed        




        */