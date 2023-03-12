import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Edit from "./edit";
import PostList from "./PostList";
import Posts from "./Posts";
import SingIn from "./SingIn";

const Dashboard = () => {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="/dashboard/singin">SingIn</Link>
        </li>
        <li>
          <Link to="/dashboard/edit">edit</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/dashboard/singin" component={SingIn}></Route>
        <Route path="/dashboard/edit" component={Edit}></Route>
      </Switch>

    </div>
  );
};

export default Dashboard;
