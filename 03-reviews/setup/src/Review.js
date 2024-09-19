import React, { useState } from 'react';
import people from './data';
//import {BiSearch,BiX,BiHome,BiMessageRoundedCheck,BiImageAdd,BiLayer,BiHeart,} from "react-icons/bi";
import { FaChevronLeft ,FaChevronRight, FaQuoteRight} from "react-icons/fa";

const Review = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text}=people[index]; // here people is whole array , in that there are multiple objects 
  const checkNumber =(number)=>{
    if(number> people.length-1)
      return 0;
    if(number< 0)
      return people.length-1;
    return number; // if index is in between thn return n0rmal
  }
  const prevPerson =()=>{
    setIndex((index)=>{
      let newIndex = index -1;
      return checkNumber(newIndex);
    })
  }
  const nextPerson =()=>{
    setIndex((index)=>{
      let newIndex = index +1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson =()=>{
    let newNumber = Math.floor(Math.random()*people.length)
    if(newNumber === index){
      newNumber = index+1;
    } 
    //setIndex(newNumber); // in case: index=3 n also newNumber 3 thn ? this case will error = "Cannot destructure property 'name' of '_data__WEBPACK_IMPORTED_MODULE_1__.default[index]' as it is undefined."
    setIndex(checkNumber(newNumber));
  }
  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-containers">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>surprise me</button>
      
      {/*
      onClick={()=>setIndex(index+1)} ==> here 4 index r there , starts with 0 , if we click 3 times , desired o/p will show but when we click once again it will show error 
      coz there r only 4 index , n we r goign out ,, so this onclick functionality doesn't work in this case 

      <h2>review component <BiSearch /> <BiHeart/>?</h2>;
      */}
      
      
    </article>
  )
};

export default Review;
