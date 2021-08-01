import React from 'react';
import { useParams ,useLocation ,useHistory} from 'react-router-dom';
const User =()=>{
    let {name,lname}= useParams();
    const location= useLocation();
    const history=useHistory();
    return <>
    <h1>This is User {name} {lname} Page</h1>
    <p>Your Current Location Path is {location.pathname}</p>
    {location.pathname === `/user/rani/dimbar` ? (<button onClick={()=> history.goBack()}>Go back</button>):null}
    {location.pathname === `/user/rani/dimbar` ? (<button onClick={()=> history.push('/')}>Home Page</button>):null}    </>
}
export default User;