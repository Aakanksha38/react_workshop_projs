import React from 'react';

const Categories = ({filterItems,allCategories}) => {
 
  return (
    <div className="btn-container">
      {/*When developer decides to add one more category in data.js . 
      here wht happens ? again same button code needs to be copy paste 
      This approch is ok but it is Static , extra efforts it request ,
      We need to make it dynamic => so in app.js we implement logic for category
      
      <button className="filter-btn" onClick={()=>filterItems("all")}>All</button>
      <button className="filter-btn" onClick={()=>filterItems("breakfast")}>breakfast</button>
      <button className="filter-btn" onClick={()=>filterItems("shakes")}>Shakes</button>
      */}

      {allCategories.map((category,index)=>{
        return (
          <button className="filter-btn" key={index} onClick={()=>filterItems(category)}>{category}</button>
        )

      })}
    </div>
    
  );
};

export default Categories;
