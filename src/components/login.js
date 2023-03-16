import React from "react";
import "../styles/login.scss";
import {FcGoogle} from "react-icons/fc";
import { Link } from "react-router-dom";
import {FaFacebookF} from "react-icons/fa";
function Login(){
    return(
        <div className="Login">
             <div className="logblock">
                <form className="logform">
                    <h2>Log In</h2>
                    <p className="logreg">Doesn't have an account yet? <Link to="/"><p style={{fontWeight:"500",fontSize:"1.05rem",marginLeft:".5rem"}}>Sign up</p></Link></p>
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter 6 more characters"/>
                    <div className="rem"><input type="checkbox" className="cb"/> Remember Me</div>
                    <button type="submit">LOG IN</button>
                    <div className="or">
                    <p className="orlines"></p> <p>OR</p> <p className="orlines"></p>
                </div>
                <div className="gf">
                    <button className="google"><FcGoogle/>Google</button>
                    <button className="fb"><FaFacebookF/>Facebook</button>
                </div>
                </form>
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=".."/>
            </div>
        </div>
    )
}
export default Login;