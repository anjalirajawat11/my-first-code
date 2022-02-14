import React from 'react'
import todo from "./images/tdoimg.jpg";
// import "./list.css";

const Todo = () => {
  return (
      <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src={todo} alt='Todologo' ></img>
                <figcaption>Add your List here </figcaption>
            </figure>

            <div className="addItem">
              <input type="text" placeholder='Add Item...' />
               <i className="fa fa-plus add-btn" title="Add Item"> </i> 
            </div>

            <div className='showItem'>
              <div className='eachItem'>
                <h3>Apple</h3>
                <i className="fa fa-trash-alt add-btn" title="Delete Item"> </i>
                
              </div>
            </div>


        </div>

    </div>
    </>
  )
}

export default Todo