import './App.css';
import NavBar from './components/NavigationBar/NavBar.jsx';
import GetStarted from './components/GetStarted/GetStarted';
import ReviewPartnership from './components/ReviewPartnership/ReviewPartnership';
import Journey from "./components/journey/journey";
import Statistic from "./components/stats/Stats.jsx"
import Footer from './components/Footer/Footer.jsx';
import Services from "./components/services/Services.jsx"

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <GetStarted/>
      <ReviewPartnership/>
      <Services/> 
      <Journey/>
      <Statistic/>
      <Footer/>
    </div>
  );
}

export default App;
