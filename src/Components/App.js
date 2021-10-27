
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    AppContext,
} from "react-router-dom";
import FishHeader from './FishHeader';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import Home from './Home'

function App() {
//conditional rendering based on loggedin status
let loggedIn = null
    return (
        <Router>
            {/* <AppContext.Provider value={InitialContext}> */}
            <FishHeader />

            <Switch>
                <Route path="/LogInForm">
                    <LogInForm />
                </Route>

                <Route path="/RegisterForm">
                    <RegisterForm />
                </Route>
                            <Route path={["/", "/home", "*"]}>
                    {loggedIn ? <Redirect to="/dashboard" /> : <Home />}
                </Route>
            </Switch>

            {/* </AppContext.Provider> */}
        </Router>
    );
}

export default App;
