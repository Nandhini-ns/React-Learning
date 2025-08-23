import React from 'react';
import './Student.css';
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";

export default function StudentTable() {
  return (
    <div>
        <div className='container-s'>
            <h2>Student Records</h2>
            <div className='table-container'>
                <button className='btn btn-add'>Add</button>
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
                    <tbody className='tal'>
                      <td>1</td>
                      <td>1001</td>
                      <td>Ji</td>
                      <td>Thanjavur</td>
                      <td>7865930108</td>
                      <td>
                         <button className="btn-action view">
                            <BsEye /> 
                         </button>
                         <button className="btn-action edit">
                           <BsPencil /> 
                          </button>
                            <button className="btn-action delete">
                               <BsTrash /> 
                            </button>
                       </td>
                    </tbody>
                </table>

            </div>

        </div>
    </div>
  )
}

