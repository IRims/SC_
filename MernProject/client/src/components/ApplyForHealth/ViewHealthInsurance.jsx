
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function ViewHealth() {
  const [insurances, setInsurance] = useState([]);

  useEffect(() => {
    // Fetch insurances from the correct endpoint
    axios.get('http://localhost:3000/healthinsurance/healthinsurance')
      .then(result => setInsurance(result.data))
      .catch(err => console.log(err));
  }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:3000/healthinsurance/deletehealthinsurance/${id}`)
//       .then(res => {
//         console.log(res);
//         window.location.reload();
//       })
//       .catch(err => console.log(err));
//   };

  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center light-transparent-background">
        <div className="w-50 bg-white rounded p-3">
        <h2 style={{textAlign:"center"}}>Available Health Insurance</h2>
          {/* <Link to="/createhealthInsurance" className="btn btn-danger">Add Insurance+</Link> */}
          <table className="table">
            <thead>
              <tr>
                <th>Insurance Name</th>
                <th>Coverage Type</th>
                <th>Description</th>
                <th>Coverage Limit</th>
                <th>Premium Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {insurances.map((insurances) => (
                <tr>
                  <td>{insurances.insurance_name}</td>
                  <td>{insurances.coverage_type}</td>
                  <td>{insurances.description}</td>
                  <td>{insurances.coverage_limit}</td>
                  <td>{insurances.premium_rate}</td>
                  <td>
                    <Link to={`/ApplyForHealth/${insurances._id}`} className="btn btn-danger"> Apply </Link>
                    {/* <button className="btn btn-danger" onClick={() => handleDelete(insurances._id)}>Delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewHealth;

