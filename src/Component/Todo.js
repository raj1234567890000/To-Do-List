import React, { useState } from 'react'
import '../App.css';
import TodoList from './TodoList';

const Todo = () => {
    const[inputList,setInputList]=useState("");
    const[Items, setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }
    const listOfItems=()=>{
        setItems((olditems)=>{
            return [...olditems,inputList];
        })
        setInputList("")
    }
    const deleteItem=(id)=>{
        alert("Delete Data")
      setItems((olditems)=>{
        return olditems.filter((arrElem,index)=>{
            return index !== id;
           
        });
      });

    }
  return (
    
      <>
      <div className='main-div'>
        <div className='center-div'>
            <br/>
            <h1>add and delete items</h1>
            <br/>
            <input type='text' placeholder=' Add a Items' onChange={itemEvent} value={inputList}/>
            <button className='buttn' onClick={listOfItems}>+</button>
            <ol>
                {/*<li>{inputList}</li>*/}
                {
                Items.map( (item,index)=>{
                   return(
                    < TodoList  key={index} id={index} onSelect={deleteItem} text={item}/>
                   )
                
                })}
            </ol>
        </div>
      </div>
      </>
   
  )
}

export default Todo
