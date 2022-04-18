import { useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';


import "./ShowStudents.css"


export const ShowStudents = () => {
    const [studentData,setStudentData] = useState([])
  //  console.log(studentData)
    let [count,SetCount] = useState(0)

    useEffect(() => {
        getData()

        
    }, [count]);

    
    const getData = async () => {
        const data = await fetch("http://localhost:8080/students").then((d) => d.json())
     // console.log(data)
       setStudentData(data)
    }
 

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table" border = "1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">

          {studentData.map((studentData) => {
  
            
            {/* populate all rows like below: */}
            return ( <tr  key={uuidv4()}  className="row">
              <td className="first_name">{studentData.first_name}</td>
              <td className="last_name">{studentData.last_name}</td>
              <td className="email">{studentData.email}</td>
              <td className="gender">{studentData.gender}</td>
              <td className="age">{studentData.age}</td>
              <td className="tenth_score">{studentData.tenth_score}</td>
              <td className="twelth_score">{studentData.twelth_score}</td>
              <td className="preferred_branch">{studentData.preferred_branch}</td>
            </tr>
           );
               })}
          </tbody>
        </table>
      </div>
    );
  };