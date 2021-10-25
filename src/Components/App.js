
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    AppContext,
} from "react-router-dom";
import Header from 'Header';
import LogInForm from './LogInForm';
import RegisterForm from '.RegisterForm';
//import Home from './Home'

function App() {
    return (
        <div className="App">
            <Router>
                {/* <AppContext.Provider value={InitialContext}> */}
                    <Header />

                    <Switch>
                        <Route path="/log-in">
                            <LogInForm />
                        </Route>

                        <Route path="/register">
                            <RegisterForm />
                        </Route>

                        <Route path={["/", "/home", "*"]}>
                            {/* <Home /> */}
                        </Route>
                    </Switch>

                {/* </AppContext.Provider> */}
            </Router>
        </div>
    );
}

export default App;
