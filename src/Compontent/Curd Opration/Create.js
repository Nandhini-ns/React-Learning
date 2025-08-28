import React, { useState } from 'react';
import './Student.css';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Create() {
  const[errors, setErrors]=useState({});
  const [success, setSuccess] = useState("");
  const navigate=useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    const studentId = e.target.studentId.value.trim();
    const name = e.target.name.value.trim();
    const place = e.target.place.value.trim();
    const phone = e.target.phone.value.trim();

    if (!studentId) newErrors.studentId = "StudentId is required";
    if (!name) newErrors.name = "Name is required";
    if (!place) newErrors.place = "Place is required";
    if (!phone) {newErrors.phone = "Phone number is required";
         } else if (!/^\d{10}$/.test(phone)) { newErrors.phone = "Phone number must be exactly 10 digits";}

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await fetch("https://68ad5410a0b85b2f2cf2e145.mockapi.io/student", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, name, place, phone }),
        });
         
         setSuccess("Student data saved successfully!"); 
        setTimeout(() => {
          navigate("/studenttable"); 
        }, 2000);
      } catch (error) {
        console.error("Error saving student:", error);
      }
    }
  };

  return (
  <div className="container-c">
      <h2 className="text-center mb-4">Add New Student</h2>
        {success && (
           <div className="alert alert-success text-center" role="alert">
          {success}
          </div>
        )}
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentId" className="form-label"><b>StudentId<span style={{color:"#962c8d"}}>*</span></b></label>
          <input type="text" id="studentId" name="studentId" className="form-control" onChange={ (e) => { if (errors.studentId) { setErrors({ ...errors, studentId: "" }); }}} />
          {errors.studentId && <div className="error-message">{errors.studentId}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label"><b>Name<span style={{color:"#962c8d"}}>*</span></b></label>
          <input type="text" id="name" name="name" className="form-control" onChange={ (e) => { if (errors.name) { setErrors({ ...errors, name: "" }); }}}/>
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="place" className="form-label"><b>Place<span style={{color:"#962c8d"}}>*</span></b></label>
          <input type="text" id="place" name="place" className="form-control" onChange={ (e) => { if (errors.place) { setErrors({ ...errors, place: "" }); }}} />
          {errors.place && <div className="error-message">{errors.place}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label"><b>Phone No<span style={{color:"#962c8d"}}>*</span></b></label>
          <input type="text" id="phone" name="phone" className="form-control" maxLength="10" onChange={ (e) => {e.target.value=e.target.value.replace(/[^0-9]/g,""); if (errors.phone) { setErrors({ ...errors, phone: "" }); }}} />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-save px-4">Save</button>
           <button type="button" className="btn btn-back ms-3 px-4" onClick={() => navigate("/studenttable")}>Back</button>
        </div>
      </form>
    </div>
    
  )
}

export default Create;
