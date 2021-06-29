import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "../Component/Header";
import Detail from "../Routes/Detail";

function Routers() {
  return (
    <Router>
      <>
        <Header />
        {/* path = 어느 경로에서 Route를 Render 할 지 알려준다. 
        component = 이 Route에 왔을 때 어떠한 컴포넌트가 보여질지 알려준다.*/}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tv" exact component={TV}></Route>
          {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>}></Route> */}
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Detail}></Route>
          <Route path="/show/:id" component={Detail}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </Router>
  );
}

export default Routers;
