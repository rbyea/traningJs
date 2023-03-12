import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Posts from "./components/Posts";
import SingIn from "./components/SingIn";
import NotFound from "./components/404";
import Dashboard from "./components/dashboard";

function App() {

  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Switch >
        <Route path="/" exact component={Home}/>
        <Route path="/singin" component={SingIn}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/posts/:postId?" component={Posts} />
        <Redirect from="/lk" to="singin" />
        <Route component={NotFound}/>
      </Switch>
      
    </div>
  );
}

export default App;
