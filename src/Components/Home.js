import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';



export default function Home() {


    return(
        <div>

        <p>
                    {//*make log in log out same button change based on status*
        <button onClick={clickHandler} className="btn btn-primary my-2"> Register </button> {""}
        <button onClick={clickHandler} className="btn btn-secondary my-2"> Log In </button> {""} 
<Link to="/form">fill out my form</Link>
        </p>
</div>


    )
}