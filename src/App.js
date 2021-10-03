import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chart from "./components/chart";

function App() {

  return (
    <div className="App">
     
        <Router>
          <Switch>
            <Route path="/" component={Chart} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
