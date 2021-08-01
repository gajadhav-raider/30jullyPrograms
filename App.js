import React from'react';
import { Route,Switch } from 'react-router-dom';
import About  from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import User from './User';
const App= ()=>{
    const Name=()=>{
        return <h1> This is the Name Page</h1>
    }
return (<>
<Menu/>
<Switch>
    <Route exact path='/' component={About} />
    <Route exact path='/contact' component={Contact}  /> 
    <Route exact path='/contact/name' component={Name}  />
    <Route exact path='/user/:name/:lname' component={User}  /> 
    <Route component={Error}/>

</Switch>
</>);
}
export default App;