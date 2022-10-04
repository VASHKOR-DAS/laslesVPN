import './App.css';
import Home from './Components/Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div>
      <div className="ml-14 mr-10">
        <Navigation></Navigation>
      </div>

      <Home></Home>

    </div>
  );
}

export default App;
