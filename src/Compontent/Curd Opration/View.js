import React,{useEffect,useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./Student.css"
export default function View() {
    const{id}=useParams();
    const navigate=useNavigate();
      const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`https://68ad5410a0b85b2f2cf2e145.mockapi.io/student/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.error("Error fetching student:", err));
  }, [id]);

  if (!student) return <p className="text-center mt-4">Loading...</p>;
  return (
  <div className="container-v tm-4 d-flex justify-content-center">
       <div className="card shadow p-4 mx-auto my-5" style={{maxWidth:"400px", width:"150%"}}>
        <button type="button" className="btn-colse position-absolute top-0 end-0 m-3" aria-label="Close" onClick={()=>navigate("/studenttable")}></button>
       <h2 className="text-center mb-4 vie">View Student</h2>
      <table className="table table-bordered">
        <tbody>
          <tr><th>Student Id</th><td>{student.studentid}</td></tr>
          <tr><th>Name</th><td>{student.name}</td></tr>
          <tr><th>Place</th><td>{student.place}</td></tr>
          <tr><th>Phone</th><td>{student.phone}</td></tr>
        </tbody>
      </table>
      <div className="text-center mt-3">
        <button className="btn btn-ve px-4 text-white"
             onClick={() => navigate("/studenttable")}>
          Back</button>
      </div>
    </div>
  </div>
  )
}


