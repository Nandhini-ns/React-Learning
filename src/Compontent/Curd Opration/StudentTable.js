import React,{ useState,useEffect,useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './Student.css';
import { BsThreeDotsVertical, BsEye, BsPencil, BsTrash } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function StudentTable() {
   const [open, setOpen] = useState(false);
   const menuRef = useRef(null);
   const navigate = useNavigate();

   useEffect(()=>{
    const handleClickOutside = (event)=>{if(menuRef.current && !menuRef.current.contains(event.target)){
      setOpen(false);
    }
  };
     document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   },[]);
  return (
    <div>
        <div className='container-s'>
            <h2>Student Records</h2>
            <div className='table-container'>
                <button className='btn btn-add' onClick={() => navigate("/create")}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Place</th>
                           <th>Phone</th>
                           <th>Actions</th> 
                        </tr>
                    </thead>
                    {/* <tbody className='tal'>
                      <tr>
                      <td>1</td>
                      <td>1001</td>
                      <td>Ji</td>
                      <td>Thanjavur</td>
                      <td>7865930108</td>
                      {/* <td>
                         <button className="btn-action view">
                            <BsEye /> 
                         </button>
                         <button className="btn-action edit">
                           <BsPencil /> 
                          </button>
                            <button className="btn-action delete">
                               <BsTrash /> 
                            </button>
                       </td> */}

                     <tbody className='tal'>
                          <tr>
                              <td>1</td>
                              <td>1001</td>
                              <td>Ji</td>
                              <td>Thanjavur</td>
                              <td>7865930108</td>
                                <td className="position-relative">
  <div ref={menuRef} style={{ display: "inline-block", position: "relative" }}>
    {/* 3 dots button */}
    <button
      className="btn btn-light btn-sm"
      onClick={() => setOpen(!open)}
    >
      <BsThreeDotsVertical />
    </button>

    {/* Dropdown */}
    {open && (
      <div
        className="custom-dropdown">
        <button className="dropdown-item d-flex align-items-center">
          <BsEye style={{ marginRight: "8px",color:"blue",width:"100px" }} />
        </button>
        <button className="dropdown-item d-flex align-items-center">
          <BsPencil style={{ marginRight: "8px" }} />
        </button>
        <button className="dropdown-item text-danger d-flex align-items-center">
          <BsTrash style={{ marginRight: "8px" }} /> 
        </button>
      </div>
    )}
  </div>
</td>

                              </tr>
                       </tbody>

                </table>

            </div>

        </div>
    </div>
  )
}

