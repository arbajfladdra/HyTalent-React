// Images

//Styles
import "./App.css";
import "./responsive.css";
import { Route, Switch } from "react-router-dom";
//Components
// Main Components
import { Header, HomePage, Footer } from "./components";

// Other PAge Component
import { SignInPage } from "./components";

function App() {
  return (
    <div className="">
      <Header />

      <Switch>
        {/* HomePage */}
        <Route exact path="/" component={HomePage} />
        {/* Otehr PAges */}
        <Route path="/register" component={SignInPage} />
      </Switch>
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
