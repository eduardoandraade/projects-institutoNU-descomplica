import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import ContextApp from './store/ContextApp';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import MinhasPastas from './pages/MinhasPastas/MinhasPastas';

function App() {
  // saveFolder('JavaScript');
 

  return (
    <BrowserRouter>
      <div className="App">
      <ContextApp initialState={{ name:"João fonseca" }}>
        
          <Header />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/minhas-pastas' element={<MinhasPastas/>}/>
          </Routes>

        </ContextApp>
          
        
      </div>
    </BrowserRouter>
  );
}

export default App;
