import { useState } from "react"




export const AddStudent = () => {

    const [studentData, setStudentData] = useState({
       firstname:"",
        lastName:"",
        email:'',
        gender:"",
        age:"",
        tenthscore:"",
        twelthscore:"",
        
    })

    const handleChange = (e) => {
     
        const {name, value} = e.target; 
       
         if(age.value > 50){
              alert("age is less than 50")
              
          }
           if(tenth.value > 100){
              alert("tenth  marks is less than 100")
          }
          if(twelth.value > 100){
            alert("twelth  marks is less than 100")
        }

           
         setStudentData({
             ...studentData,
             [name]: value,
         })
      
        
         
     }


     const handleSubmit = (e) => {
        e.preventDefault()
          fetch("http://localhost:8080/students", {
             method:"POST",
              headers: {
                  "content-type":"application/json"
              },
              body:JSON.stringify(studentData)
          })
        console.log(studentData)
    }




    return (
      <form  onSubmit={handleSubmit} className="addstudent">
        <div>
          Firstname:{" "}
          <input
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
            onChange={handleChange}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
             onChange={handleChange}
              name="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            
            <input
             onChange={handleChange}
              name="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
           onChange={handleChange}
            id="age"
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
           onChange={handleChange}
           id= "tenth"
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
          id="twelth"
           onChange={handleChange}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
           onChange={handleChange}
            value={studentData.value} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input  className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };