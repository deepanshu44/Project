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

export default function View(){
  return <div><Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path='/error'>
            <Error/>
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
