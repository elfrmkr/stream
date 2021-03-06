import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import history from "../history";
/*Link is preventing page from reloading while navigate arounf the application*/

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
