import React from 'react';
import {Grid} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import axios from 'axios'

export default function View(){
  console.log("hello",process.env);
  return <div><style type="text/css">
  {`
      .abcRioButtonBlue {
      background-color: #4285f4;
      border: none;
      color: #fff;
    }
    .abcRioButton {
      -webkit-border-radius: 1px;
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;
      transition: background-color .218s,border-color .218s,box-shadow .218s;
      -webkit-user-select: none;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      color: #262626;
      cursor: pointer;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      width: auto;
    }
    .abcRioButtonBlue .abcRioButtonContentWrapper {
      border: 1px solid transparent;
    }
    .abcRioButtonContentWrapper {
      height: 100%;
      width: 100%;
    }
    .abcRioButtonBlue .abcRioButtonIcon {
      background-color: #fff;
      -webkit-border-radius: 1px;
      border-radius: 1px;
    }
    .abcRioButtonIcon {
      float: left;
    }
    .abcRioButtonContents {
      font-family: Roboto,arial,sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: .21px;
      margin-left: 6px;
      margin-right: 6px;
      vertical-align: top;
}`}</style><div class="abcRioButton abcRioButtonBlue" style={{height:'50px',width:'240px',backgroundColor:"#4285f4",color:'#fff'}}><div class="abcRioButtonContentWrapper"><div class="abcRioButtonIcon" style={{padding:'15px'}}><div style={{width:'18px',height:'18px'}} class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div></div><span style={{fontSize:'16px',lineHeight:'48px'}} class="abcRioButtonContents"><span id="not_signed_int2dgwo1u11rx">Sign in with Google</span><span id="connectedt2dgwo1u11rx" style={{display:'none'}}>Signed in with Google</span></span></div>
</div>
<Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home
                </Link>
            </li>
            <li>
              <Link to="/login" >Login</Link>
            <a href="/auth/google" style={{textDecoration:'none'}}><div class="abcRioButton abcRioButtonBlue" style={{height:'50px',width:'240px',backgroundColor:"#4285f4",color:'#fff'}}><div class="abcRioButtonContentWrapper"><div class="abcRioButtonIcon" style={{padding:'15px'}}><div style={{width:'18px',height:'18px'}} class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div></div><span style={{fontSize:'16px',lineHeight:'48px'}} class="abcRioButtonContents"><span id="not_signed_int2dgwo1u11rx">Sign in with Google</span><span id="connectedt2dgwo1u11rx" style={{display:'none'}}>Signed in with Google</span></span></div>
            </div></a>
            </li>

            <li>
              <Link to="/users">Users</Link><br/>
              <Link to="/protected">protected</Link><br/>
              <a href="/logout" >Logout</a>
            </li>
          </ul>
        </nav>
<button onClick={()=>axios.post('http://localhost:8000/test',{
    data:"data from axios"
  })}>PostData</button>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path='/protected'>
            <div>protected</div>
          </Route>
          <Route path='/error'>
            <Error/>
          </Route>
          <Route path="/loggedout">
            <div>Logged out</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router></div>
}



function Home() {
  return <h2>Home</h2>;
}
function Error() {
  return <h2>No user</h2>;
}
function Login() {
  return <form action="/login" method="post">
	<div>
	<label>Username:</label>
	<input type="text" name="username"/><br/>
	</div>
	<div>
	<label>Password:</label>
	<input type="password" name="password"/>
	</div>
	<div>
	<input type="submit" value="Submit"/>
	</div>
</form>
	;
}

function Users() {//`${match.url}/components`
  let match = useRouteMatch()
  return <><h2>Loggedin</h2> <Link to={`${match.url}/hello`}>Home</Link>
    <Switch>
      <Route path={`${match.url}/hello`}>
        <div>hello</div>
      </Route>
      <Route path="/hellot">
        <Users /></Route>
        </Switch></>;
}
