import React, { useState , useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' //values.js is a lib which we will use for color shades , we need to import this , link to this is in README.md
/**
 * useState for i/p color , list of colors to show , error - in case user enter invalid color code 
 * 2 sections - 1 section for form - label input text, btn n other section for list of color shades to display
 * using values.js lib to show colors  ===    let colors = new Values(color).all(10);
 * try ctach block so to catch the error if user gives incorrect color-code
 * when user give incorrect color code - user should get to know what mistake made , so i/p box should turn into red in case of error
 * {listOfShades.map((color,index)=>{
          return <SingleColor key={index} {...color} index={index}></SingleColor>
        })}  =>>> all the infor we r getting in color ,passing it as prop with spred operator(...)
  * now , here initally when we go to screen there is no color shade appears , but list should have any default code value so to display color-shade on screen ==>> assign a color-code to list 

 * **/
 
function App() {
  const [color, setColor] = useState('');
  const [listOfShades, setListOfShades] = useState(new Values('#ffd700').all(10));
  const [error, setError] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setListOfShades(colors); //list which is we shown in console now present in color
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    //let colors = new Values(color).all(10); // grab the color whatever we are passing n get all shades of it (color).all(10)
    //console.log(colors);
  };
  
  return(
    <>
      <section className='container'>
        <h3>Color Generator:</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="color" 
            id="color" 
            placeholder='#ffd700' 
            value={color} 
            onChange={(e)=> 
            setColor(e.target.value)}
            className={`${error? "error" : null}`}
            />
          <button 
            type="submit" 
            className="btn">
              Generate
          </button>
        </form>
      </section>
      <section className='colors'>
      {listOfShades.map((color,index)=>{
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>

    </>
  );
}

export default App
