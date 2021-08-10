import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./header";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";

/*Link is preventing page from reloading while navigate arounf the application*/

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
