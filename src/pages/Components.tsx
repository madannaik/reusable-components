import ButtonList from "../components/ButtonList";
import Navbar from "../components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { InputList } from "./InputList";

export default function Components() {
  return (
    <div className="main">
      <Router>
        <div className="main__nav">
          <Navbar />
        </div>
        <Switch>
          <div className="main-body">
            <Route exact path="/" component={ButtonList} />
            <Route exact path="/input" component={InputList}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
