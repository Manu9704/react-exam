import React from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";
function Register(){
    return(
        <div className="Register">
            <div className="regblock">
                <form className="regform">
                    <h2>Register</h2>
                    <label>Name</label>
                    <input type="text" placeholder="Full Name" />
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com"/>
                    <label>Phone</label>
                    <input type="text" placeholder="0123456789"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter 6 more characters"/>
                    <button type="submit">REGISTER</button>
                    <p className="logreg">Already have an account? <Link to="/login" ><p style={{fontWeight:"500",fontSize:"1.05rem",marginLeft:".5rem"}}>Login</p></Link></p>
                </form>
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=".."/>
            </div>
        </div>
    )
}
export default Register;