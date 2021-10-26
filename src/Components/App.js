
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    AppContext,
} from "react-router-dom";
import FishHeader from './FishHeader';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
//import Home from './Home'

function App() {
    return (
            <Router>
                {/* <AppContext.Provider value={InitialContext}> */}
                    <FishHeader />

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
    );
}

export default App;
