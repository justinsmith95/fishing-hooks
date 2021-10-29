import React from 'react'
import { useHistory } from "react-router-dom";
import App from "./App"


export default function Dashboard(props) {

    let history = useHistory();
    const ShopButton = () => {
        history.push("/Shop");
    }

    return (
        <div>



            <p> Howdy partner, welcome to the Dashboard. Shop with us, {props.userName}
        <button type="button" className="btn btn-primary my-2" onClick={ShopButton}> Shop With Us </button> {""}
            </p>

        </div>


    )
}