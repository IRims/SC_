// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateHealth() {
    
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [age, setAge] = useState()
    const [cnic, setcnic] = useState()
    const [address, setaddress] = useState()
    const [phoneNo, setphoneNo] = useState()
    const [disease, setdisease] = useState()
    const [insurance_status, setinsurance_status] = useState()
    const [document_cnic,setdocument_cnic]=useState()
    const {id} = useParams()
    const [insurance_name, setName]=useState()
    const [coverage_type, setType]=useState()
    const[description,setDescription]=useState()
    const [coverage_limit, setLimit]=useState()
    const[premium_rate,setRate]=useState()

    const navigate = useNavigate()
    
    useEffect(()=>{{
        axios.get('http://localhost:3000/healthinsurance/gethealthinsurance/'+id)
        .then(result => {console.log(result)
          setName(result.data.insurance_name)
          setType(result.data.coverage_type)
          setDescription(result.data.description)
          setLimit(result.data.coverage_limit)
          setRate(result.data.premium_rate)
          setinsurance_status("Pending")
        })
        .catch(err => console.log(err))
      }},[])


    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/userhealthinsurance/CreateUserhealthinsurance",
        {firstname,lastname,age,cnic,address,phoneNo,disease,insurance_name,coverage_type,description,coverage_limit,premium_rate,insurance_status,document_cnic})
        .then(result => {
            console.log(result)
            navigate('/viewHealthInsurance')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex text-bg-dark p-3 justify-content-center align-items-center' >
        <div className='w-50 bg-primary bg-opacity-25 rounded p-3'>
            <form onSubmit={Submit}>
                <h2 style={{textAlign:"center"}}>Apply For Health Insurance</h2>
                
                <div className='mb-2'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter First Name' className='form-control'required
                    onChange={(e) => setfirstname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter Last Name' className='form-control'required
                    onChange={(e) => setlastname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type='Number' placeholder='Enter Age' className='form-control' required
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">CNIC</label>
                    <input type="text" placeholder='Enter CNIC' className='form-control'required
                    onChange={(e) => setcnic(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Enter Address' className='form-control'required
                    onChange={(e) => setaddress(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder='Enter Phone No' className='form-control'required
                    onChange={(e) => setphoneNo(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Disease</label>
                    <input type="text" placeholder='Enter Disease' className='form-control'required
                    onChange={(e) => setdisease(e.target.value)}/>
                </div>

                {/* <div className='mb-2'>
                    <label htmlFor="">Insurance Status</label>
                    <input type="text" placeholder='Enter Insurance status' className='form-control'required
                    onChange={(e) => setinsurance_status(e.target.value)}/>
                </div> */}
                <div className='mb-2'>
                    <label htmlFor="">Upload Document</label>
                    <input type="file" placeholder='Upload doc' className='form-control'required
                    onChange={(e) => setdocument_cnic(e.target.value)}/>
                </div>

                {/* <div className='mb-2'>
          <label htmlFor="" > Insurance Name </label>
          <input type="text" className='form-control' placeholder='Enter Insurance Name' disabled
          value={insurance_name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Coverage Type </label>
          <input type="text" className='form-control' placeholder=' Enter Coverage Type' disabled
          value={coverage_type} onChange={(e)=> setType(e.target.value)}/>
          
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Description </label>
          <input type="text" className='form-control' placeholder='Enter Description'  disabled
          value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" > Coverage Limit </label>
          <input type="text"  className='form-control' placeholder='Enter Coverage Limit'   disabled
          value={coverage_limit} onChange={(e)=> setLimit(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Premium Rate </label>
          <input type="text"  className='form-control' placeholder='Enter Preminum rate' disabled  
          value={premium_rate} onChange={(e)=> setRate(e.target.value)}/>
          </div> */}
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateHealth;