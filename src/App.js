import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Route, Switch} from 'react-router-dom'
import About from "./containers/About/About";

function App(props) {
    console.log(props)
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Quiz}/>
                <Route path='/about' component={About}/>
                <Route path='/quiz/list' component={Quiz}/>
                <Route path='/quiz/:id' component={Quiz}/>
            </Switch>
        </Layout>
    );
}

export default App;
