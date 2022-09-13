import './App.css';
import Navigation from './Navigation/Navigation';
import {Routes, Route} from 'react-router-dom'
import Fishes from './Critters/Fishes';
import { IslandLocationProvider } from './Contexts/Contexts';
import Home from './Home/Home';
import Bugs from './Critters/Bugs';

function App() {
  return (
    <IslandLocationProvider>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fishes' element={<Fishes />} />
        <Route path='/seacreatures' element={<Home />} />
        <Route path='/bugs' element={<Bugs />} />
        <Route 
          path='*'
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } 
        />
      </Routes>
    </IslandLocationProvider>
    
    
  );
}

export default App;
