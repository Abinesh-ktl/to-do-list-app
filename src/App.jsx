import { useState } from 'react';
import './App.css';

function App() {
  const[todo,setTodo]=useState('')
  const[todos,setTodos]=useState([])
  const[editId,seteditid]=useState(0)



  const handlesubmit=(e)=>{
    e.preventDefault()


    if(editId){
      const editTodo=todos.find((i)=>i.id=== editId);
      const updatetodos=todos.map((t)=>
      t.id===editTodo.id?(t={id:t.id,todo})
      :{id:t.id,todo:t.todo}
      )

      setTodos(updatetodos);
      seteditid(0)
      setTodo('')
      return;
    }

    if(todo!=='')
    {
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
      setTodo('')

    }


  }

  const handleclick=(id)=>{
    const Deletetodo=todos.filter((to)=>(to.id)!==id)
    setTodos([...Deletetodo])
  }
  

  const handleEdit=(id)=>{

    const editTodo= todos.find((i)=>i.id===id)
    setTodo(editTodo.todo)
    seteditid(id);
    
  }
  



  return (
    <div className='App'>
      <br />
      <div>
       <h1>To Do Listt App</h1>
       <form action="" onSubmit={handlesubmit}>
       <input type="text"  value={todo} onChange={(e)=>setTodo(e.target.value)} />
       
       <button type='submit'> {editId?'Edit':'go'}</button> <br />
       </form>
       <ul>
       {todos.map((t)=>(
          <li>
            <span>{t.todo}</span>
             <button onClick={()=>(handleEdit(t.id))}>Edit</button>
              <button onClick={()=>(handleclick(t.id))}>Delete</button>
            </li>
        ))}


       </ul>

     
       </div>
       
       

    </div>
   
    
  );
}

export default App;
