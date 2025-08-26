import React,{ useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Student.css';
import { BsThreeDotsVertical, BsEye, BsPencil, BsTrash } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function StudentTable() {
   const [openRow, setOpenRow] = useState(null);
   const [students, setStudents] = useState([]);
   const navigate = useNavigate();
   

   useEffect(() => {
    fetch("https://68ad5410a0b85b2f2cf2e145.mockapi.io/student")
    .then((res) => res.json())
    .then ((data)=> setStudents(data))
    .catch((err)=>console.error("Error fetching data:", err))
   },[]);

    const toggleDropdown = (id) => {
    if (openRow === id) {
      setOpenRow(null); 
    } else {
      setOpenRow(id); 
    }
  };

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
                           <th>S.ID</th>
                           <th>Name</th>
                           <th>Place</th>
                           <th>Phone</th>
                           <th>Actions</th> 
                        </tr>
                    </thead>
                         <tbody>
                             {students.map((student, i) => (
                                <tr key={student.id}>
                                 <td>{i + 1}</td>
                                 <td>{student.studentId}</td>
                                  <td>{student.name}</td>
                                 <td>{student.place}</td>
                                  <td>{student.phone}</td>
                                <td className="position-relative">
                                 <div style={{ display: "inline-block", position: "relative" }}>
                              
                               <button
                               className="btn btn-light btn-sm"
                                   onClick={() => toggleDropdown(student.id)}
                                 >
                                  <BsThreeDotsVertical />
                                  </button>

                                  {openRow === student.id && (
                               <div
                                 className="custom-dropdown">
                                 <button className="dropdown-item d-flex align-items-center">
                                 <BsEye style={{ marginRight: "8px",color:"blue",fontSize:"20px" }} />
                                 </button>
                                  <button className="dropdown-item d-flex align-items-center">
                                          <BsPencil style={{ marginRight: "8px",fontSize:"20px",color:"green" }} />
                                  </button>
                                  <button className="dropdown-item text-danger d-flex align-items-center">
                                        <BsTrash style={{ marginRight: "8px",fontSize:"20px"}} /> 
                                  </button>
                               </div>
                             )}
                            </div>
                         </td>

                        </tr>
                        ))}
                    </tbody>

              </table>

            </div>

         </div>
     </div>
   )
}



