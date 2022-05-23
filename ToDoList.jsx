import React, { useState } from 'react'
import './AddItems.css'

function ToDoList() {

    let [item, setItem] = useState("")

    let [myitems, setMyitems] = useState([])
    
    let updateItems = (event)=>
    {
        setItem(event.target.value)
    }

    let addItem = ()=>
    {
        setMyitems((pitem)=>[...pitem,item])       
    }

    let deleteItem = (event)=>
    {
        let index = event.target.id
        myitems.splice(index,1)
        setMyitems((pitem) => [...pitem])
    }

  return (
    <div className='main'>

        <section className='subclass'>

            <div className='header'>

                <h1 className='heading'>To Do List</h1>

                <input type="text" placeholder='Enter Task to do'  id="inp" onChange={updateItems}/>

                <button onClick={addItem}>Add</button>

                <hr />  

            </div>
            
            <div className='body'>

                {
                    myitems.map((ele, ind)=>
                    {
                        return (
                            <div key={ind}>

                                <p>{ele}</p>

                                <button id={ind} onClick={deleteItem}>Delete</button>

                            </div>
                        )
                    })
                }
        
            </div>

        </section>

        

    </div>
  )
}

export default ToDoList