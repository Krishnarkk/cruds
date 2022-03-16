import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate=useNavigate();
    const [id,setId]=useState();
    const[name,setName]=useState('');
    const[pos,setPos]=useState('');
    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setPos(localStorage.getItem('pos'))
        setId(localStorage.getItem('id'))
    
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`https://622af5bb14ccb950d22a527a.mockapi.io/Employee/${id}`,
        {
            name,
            pos
        }
        ).then(()=>{alert('data is updated')
             navigate('/')
         })
       
    }
  return (
    <div>
      <div className='form-box mt-5'>
                <form>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder='name' value={ name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Position</label>
                        <input className="form-control" type="text" placeholder='position' value={pos} onChange={(e)=>setPos(e.target.value)} />
                    </div>
                    <div className='d-grid text-center mt-3'>
                        <button className='btn btn-lg btn-primary' onClick={handleSubmit}>Update</button>
                    </div>
                </form>

            </div>

    </div>
  )
}

export default Update