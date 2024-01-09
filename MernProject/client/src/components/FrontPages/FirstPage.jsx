import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function First() {
    return (
        <div className='d-flex vh-100 text-bg-dark  justify-content-center align-items-center' >
            <div className='w-50 bg-light rounded p-3'>
            <h1 style={{ textAlign: "center" ,color:"black" }}> INSURANCE MANAGEMENT SYSTEM </h1>
                <div className='d-flex vh-50 text-bg-dark  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Health Insurance</h3>
                    <Link to="/viewHealthInsurance" className='btn btn-primary'> Apply </Link>
                </div>
                <div className='d-flex vh-50 text-bg-dark  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Life Insurance</h3>
                    <Link to="/viewLifeInsurance" className='btn btn-primary'> Apply </Link>
                </div>
                <div className='d-flex vh-50 text-bg-dark  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Automobile Insurance</h3>
                    <Link to="/viewAutoInsurance" className='btn btn-primary'> Apply </Link>
                </div>
                {/* <div className='d-flex vh-50 text-bg-dark  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Applied Insurances</h3>
                    <Link to="/ViewInsurance" className='btn btn-primary'> View </Link>
                </div> */}
            </div>
        </div>
    )
}

export default First;