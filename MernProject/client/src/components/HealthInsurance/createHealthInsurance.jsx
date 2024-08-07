
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function createHealthInsurance() {

    const [insurance_name, setName]=useState()
    const [coverage_type, setType]=useState()
    const[description,setDescription]=useState()
    const [coverage_limit, setLimit]=useState()
    const[premium_rate,setRate]=useState()
    const navigate=useNavigate()
  
    const Submit = (e) => {
      e.preventDefault();
      setType("Health")
      axios.post("http://localhost:3000/healthinsurance/createhealthinsurance",{insurance_name, coverage_type,description,coverage_limit,premium_rate})
      .then(result => {
        console.log(result)
        navigate('/health/')
      })
      .catch(err => console.log(err))
    }  

  return (
    <>
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Insurance</h2>
          <div className='mb-2'>
          <label htmlFor="" >Insurance Name </label>
          <input type="text" className='form-control' placeholder=' Enter Insurance Name' required
          onChange={(e)=> setName(e.target.value)}/>
          
          </div>
          
          {/* <div className='mb-2'>
          <label htmlFor="" >Coverage Type </label>
          <input type="text" className='form-control' placeholder=' Enter Coverage Type' required
          value={"Health"} onChange={(e)=> setType(e.target.value)}/>
          
          </div> */}
          
          <div className='mb-2'>
          <label htmlFor="" >Description </label>
          <input type="text" className='form-control' placeholder='Enter Description' required
          onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" > Coverage Limit</label>
          <input type="text"  className='form-control' placeholder='Enter Coverage Limt' required
          onChange={(e)=> setLimit(e.target.value)}/>
          </div>

          <div className='mb-2'>
          <label htmlFor="" > Premium Rate</label>
          <input type="text"  className='form-control' placeholder='Enter Premium Rate' required
          onChange={(e)=> setRate(e.target.value)}/>
          </div>
                    
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default createHealthInsurance





