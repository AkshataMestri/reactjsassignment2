import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration=(props)=>{
    let history =useNavigate();
    const[data, setData]=useState({
        fname:"",
        address:"",
        email:"",
        phone:"",
        dob:""

    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const senddata={
            fname:data.fname,
            address:data.address,
            email:data.email,
            phone:data.phone,
            dob:data.dob
        }
        console.log(senddata);
        axios.post('http://localhost/reactassignment/assignment1/adddata.php',senddata).then((result)=>{
            if(result.data.status=='Invalid')
            {
                alert('Invalid User');
                
            }
            else{
                alert('Data Added Successfully.');
            }
        })
    }

    return(
        <form onSubmit={submitForm}>
            <div className="main-box">
           <div className="row">
            <div className="col-md-12 text-center"><h1>Registration Form</h1></div>
            </div>
            <div className="row">
                <div className="col-md-6">Name:</div>
                <div className="col-md-6">
                    <input type="text" name="fname" className="form-control" pattern="[A-Za-z ]{1,32}" title="Name should contain alphanbets only" required
                        onChange={handleChange} value ={data.fname}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Address:</div>
                <div className="col-md-6">
                    <input type="text" name="address" className="form-control" required 
                        onChange={handleChange} value ={data.address}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Email:</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control" required
                        onChange={handleChange} value ={data.email}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Phone:</div>
                <div className="col-md-6">
                    <input type="text" name="phone" className="form-control" pattern="[1-9]{1}[0-9]{9}" title="Phone should contain 10 digits and should not start with 0" required 
                        onChange={handleChange} value ={data.phone}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Date of Birth:</div>
                <div className="col-md-6">
                    <input type="date" name="dob" className="form-control" required
                        onChange={handleChange} value ={data.dob}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <input type="submit" name="submit" value="Submit" className="btn btn-primary" />
                </div>
               
            </div>
       </div> 
       </form>
    )
}

export default Registration;