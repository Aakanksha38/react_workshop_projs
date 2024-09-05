import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://www.course-api.com/react-tours-project'; //this url is working fine 
function App() {
  const [loading , setLoading ] = useState(true);
  const [tours , setTours] = useState([]);
  const removeTour =(id)=>{
    const newTours = tours.filter((tour)=>tour.id !==id) 
    setTours(newTours);
  }

  const removeAllTourIds = ()=>{
    setTours([]);
  }

  const fetchUrl =async () =>{
    setLoading(true); // coz while fetching the data,i dont have any data to show so we want to laoding to be true 
    try{
      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false);
      setTours(tour);
    } catch (error){
      setLoading(false);
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchUrl();
  },[])
  
  if(loading){
   return <Loading/>
  }

  //when we remove all the tourids , thn nothing will be left , so at that time when 
  //clicked on some btn , thn all my tours should get shown again 
  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={()=>fetchUrl()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} removeAllTourIds={removeAllTourIds}/>
    </main>
  )
}

export default App
