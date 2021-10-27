import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";



export default function Home() {
    
    
    let history = useHistory();
    const LogInButton = () => {
        history.push("/LogInForm");
    }

    const RegisterButton = () => {
        history.push("/RegisterForm");
    }

    return(
        <div>

        <p>
                    {/* {//*make log in log out same button change based on status* */}You must <Link to="/LogInForm">Log In</Link> to shop
        <button type="button" className="btn btn-primary my-2" onClick={LogInButton}> {""} 
          Log In
        </button>
        </p>
        <p> Don't have an Account? <Link to="/RegisterForm">Register</Link> with us!
        <button type="button" className="btn btn-secondary my-2" onClick={RegisterButton}> Register </button> {""}
        </p>

</div>


    )
}