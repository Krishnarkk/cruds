import React,{useEffect, useState} from 'react'
import './Home.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[pos,setPos]=useState('');

    const[data,setData]=useState([]);
  const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post('https://622af5bb14ccb950d22a527a.mockapi.io/Employee',{name,pos})
      .then(()=>window.location.reload())
    //   .catch(err=>console.log(err))

  }

   useEffect(()=>{
    axios.get("https://622af5bb14ccb950d22a527a.mockapi.io/Employee")
      .then(res=>{setData(res.data)})
    },[])
 
   const handleDelete=(id,name)=>{
       axios.delete(`https://622af5bb14ccb950d22a527a.mockapi.io/Employee/${id}`)
      .then(()=>{alert(`are you sure want to delete ${name}`)
       var newData=data.filter((item)=>{

        //  id==> selected id or main id
        //   item == entire old Array 
           return item.id!==id    
        //    (I need to return elements whose id is not equal to main selected id)
       })
       setData(newData)
      
    })
       
    

   }
   const  handleUpdate=(id,name,pos)=>{
       localStorage.setItem('id',id);
       localStorage.setItem('name',name);
       localStorage.setItem('pos',pos);
    navigate('/update')    
} 
    return (

        <div className='bg-warning'>
            <h1 className='text-center text-success'> React CRUD application </h1>
            <div className='form-box mt-5'>
                <form>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder='name' value={ name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Position</label>
                        <input className="form-control" type="text" placeholder='position' value={pos} onChange={ (e)=>setPos(e.target.value)} />
                    </div>
                    <div className='d-grid text-center mt-3'>
                        <button className='btn btn-lg btn-primary' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>

            </div>

            <div className='row container main-rows'>
                {
                    data.map(({id,name,pos})=>
                    <div key={id} className='col-sm-3 mb-2'>
                       <div className='card bg-warning bg-warning shadow-lg p-3 mb-5 rounded'>
                           <div className='card-body'>
                               <div>
                               <button className='btn btn-danger p-1 m-2' onClick={()=>handleDelete(id,name)}>delete</button>
                                 <button  className="btn btn-success p-1 m-2 "   onClick={()=>handleUpdate(id,name,pos)}>Edit</button>
                                 </div>
                                <h2 className='text-success'>Name:{name}</h2>
                                <h2 className='text-primary'>Position:{pos}</h2>
                               </div>
                           </div>
                    </div>
                    )}
             </div>
        </div>
    )
}

export default Home