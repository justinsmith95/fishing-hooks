
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Redirect,
    Link,
    AppContext,
} from "react-router-dom";
import FishHeader from './FishHeader';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import Home from './Home';
import Dashboard from './Dashboard';
import Shop from './Shop';
import axios from 'axios';

function App(props) {

    const [userData, setUserData] = useState({})
    const [token, setToken] = useState("")
    const history = useHistory();

    //      get User Info from Auth token API Call (3)
    const getUserInfo = () => {
        axios.get("https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function (response) {
                console.log(response);
                setUserData(response.data.data.user_data)
                //    setUserName()
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    // logout user API Call
    const logoutUser = () => {
        console.log(token)
        axios.get("https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function (response) {
                console.log(response);
                setToken("");
                setUserData({});
                window.localStorage.removeItem("userToken")
                history.push("/home")

            })
            .catch(function (error) {
                console.log(error)
            })
        console.log(token)

    }


    useEffect(() => {
        console.log("onmount")
        let LS = localStorage.getItem('userToken');
        if (LS) {
            setToken(LS);
        }
        // getUserInfo();
    }, [])
    console.log(token);

    useEffect(() => {
        console.log("ontokenchange")
        if (token.length > 0) {
            getUserInfo();
        }
    }, [token])





    //conditional rendering based on loggedin status
    return (
        <Router>
            {/* <AppContext.Provider value={InitialContext}> */}
            <FishHeader
                userName={userData.name}
                logoutUser={logoutUser}
                token={token}
            />

            <Switch>
                <Route path="/LogInForm">
                    <LogInForm
                        setToken={setToken}
                        token={token}
                    />
                </Route>

                <Route path="/Shop">
                    <Shop
                        setToken={setToken}
                        token={token}
                    />
                </Route>

                <Route path="/RegisterForm">
                    <RegisterForm
                        setToken={setToken} />
                </Route>
                <Route path="/dashboard">
                    {token.length > 0 ? <Dashboard
                        userName={userData.name}
                    /> : <Redirect to="/" />}
                </Route>
                <Route path={["/", "/home", "*"]}>
                    {token.length > 0 ? <Redirect to="/dashboard" /> : <Home
                    />}
                </Route>
            </Switch>

            {/* </AppContext.Provider> */}
        </Router>
    );
}

export default App;
