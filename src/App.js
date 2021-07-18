import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero1 from './Components/Hero1';
import Hero2 from './Components/Hero2';
import Features from './Components/Features';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ="/">
           <Hero1/>
           <Hero2/>
           <Features/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
