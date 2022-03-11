import React, { useState } from 'react'
import './Home.css';
import axios from 'axios'


const Home = () => {
  const[name,setName]=useState('');
  const[pos,setPos]=useState('');
  const[data,setData]=useState([])
  // axios.get('http://localhost:3333/employee')
  
   const handleSubmit=(e)=>{
     e.preventDefault();
     axios.post("https://622af5bb14ccb950d22a527a.mockapi.io/Employee",{name,pos})
  // .then(res=>console.log(res))
  .then(()=>window.location.reload())
    
   }
   axios.get("https://622af5bb14ccb950d22a527a.mockapi.io/Employee").then(res=>setData(res.data))
  return (
    <>
    <div className='form-box mt-5'>
<form >
    <div class="form-group">
      <label for="name">Name</label>
      <input class="form-control" id="name" type="text" name="Name" onChange={(e)=>{setName(e.target.value)}}/>
    </div>
    <div class="form-group">
      <label for="email">Position</label>
      <input class="form-control" id="email" onChange={(e)=>{setPos(e.target.value)}} type="email" name="Email"/>
    </div>
  </form>
  <div className=' d-grid text-center mt-3'>
  <button className='btn btn-primary btn-lg ' onClick={handleSubmit}>Submit</button>
  </div>
 </div>
 <div>
 <div class="row container mt-5">
 {
       data.map(({id,name,pos})=>
       <>
  <div class="col-sm-6 mt-3">
 
    <div class="card">
      <div class="card-body">
       <div className='row'>
       
       <div className='col'> <h1>{id}</h1></div>
       <div className='col mr-2'>
        <p>delete</p>
        <p>edit</p>

        </div>
        </div>
       <h2 class="card-title text-warning">{name}</h2>
        <h3 class="card-text text-danger ">{pos}</h3>
      
      </div>
    </div>
   
  </div>
  </>
       )
     }
</div>
 </div>
 
 </>
  )
}

export default Home