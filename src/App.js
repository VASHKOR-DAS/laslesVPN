import './App.css';
import Navigation from './Components/Shared/Navigation/Navigation';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="mx-2 md:mx-6 lg:mx-16">
      <div className='container mx-auto'>
        <Navigation></Navigation>
        <Home></Home>
      </div>
    </div>


  );
}

export default App;
