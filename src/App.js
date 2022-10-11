import './App.css';
import Navigation from './Components/Shared/Navigation/Navigation';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="">
      <div className='container mx-auto'>
        <Navigation></Navigation>
        <Home></Home>
      </div>
      
    </div>
  );
}

export default App;
