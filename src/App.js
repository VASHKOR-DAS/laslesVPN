import './App.css';
import Navigation from './Components/Shared/Navigation/Navigation';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Footer/Footer';
import SpecialFeatures from './Components/Pages/SpecialFeatures/SpecialFeatures';

function App() {
  return (
    <div className="">
      <div className='container mx-auto'>
        <Navigation></Navigation>
        <Home></Home>
      </div>
      <SpecialFeatures></SpecialFeatures>
      <Footer></Footer>
      <br />
    </div>
  );
}

export default App;
