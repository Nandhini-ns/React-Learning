import React, { useState, useEffect } from 'react';
import './Student.css';
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Create() {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    studentid: "",
    name: "",
    place: "",
    phone: ""
  });

  const navigate = useNavigate();
  const { id } = useParams(); 
  
  useEffect(() => {
    if (id) {
      fetch(`https://68ad5410a0b85b2f2cf2e145.mockapi.io/student/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching student:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, ""); 
    }

    setFormData({ ...formData, [name]: newValue });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.studentid) newErrors.studentid = "Studentid is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.place) newErrors.place = "Place is required";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        if (id) {
        
          await fetch(`https://68ad5410a0b85b2f2cf2e145.mockapi.io/student/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          setSuccess("Student data updated successfully!");
        } else {
          await fetch("https://68ad5410a0b85b2f2cf2e145.mockapi.io/student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          setSuccess("Student data saved successfully!");
        }

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
      <h2 className="text-center mb-4">
        {id ? "Edit Student" : "Add New Student"}
      </h2>
      {success && (
        <div className="alert alert-success text-center" role="alert">
          {success}
        </div>
      )}
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentid" className="form-label">
            <b>Studentid<span style={{ color: "#962c8d" }}>*</span></b>
          </label>
          <input
            type="text"
            id="studentid"
            name="studentid"
            className="form-control"
            value={formData.studentid}
            onChange={handleChange}
            disabled={id ? true : false} 
          />
          {errors.studentid && <div className="error-message">{errors.studentid}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <b>Name<span style={{ color: "#962c8d" }}>*</span></b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="place" className="form-label">
            <b>Place<span style={{ color: "#962c8d" }}>*</span></b>
          </label>
          <input
            type="text"
            id="place"
            name="place"
            className="form-control"
            value={formData.place}
            onChange={handleChange}
          />
          {errors.place && <div className="error-message">{errors.place}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <b>Phone No<span style={{ color: "#962c8d" }}>*</span></b>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            maxLength="10"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-save px-4">
            {id ? "Update" : "Save"}
          </button>
          <button
            type="button"
            className="btn btn-back ms-3 px-4"
            onClick={() => navigate("/studenttable")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
