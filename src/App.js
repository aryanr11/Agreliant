import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import Research from './Research';
import Production from './Production';
import Quality from './Quality';
import Products from './Products';
import Aboutus from './Aboutus';
import Careers from './Careers';
import ScrollToTop from './ScrollToTop';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/production">
              <Production />
            </Route>
            <Route path="/quality">
              <Quality />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
