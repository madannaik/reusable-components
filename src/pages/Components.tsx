import ButtonList from "./ButtonList";
import Navbar from "../components/Navbar";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { InputList } from "./InputList";
import _Dummy from "../components/Dummy";

export default function Components() {
  return (
    <div className="main">
      <Router>
        <div className="main__nav">
          <Navbar />
        </div>
        <Switch>
          <div className="main-body">
            <Route exact path="/">
              <Redirect to="/button" />
            </Route>
            <Route exact path="/button" component={ButtonList} />
            <Route exact path="/input" component={InputList} />
            <Route exact path="/space" component={_Dummy} />
            <Route exact path="/typo" component={_Dummy} />
            <Route exact path="/grid" component={_Dummy} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
