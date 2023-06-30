import './App.css';
import Header from './components/Header.js';  
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './page/About';
import Home from './page/Home';
import ListUsers from './page/List-users';
import ModalComponent from './page/Modal';
import Sidebar from './components/Sidebar';
import Counter from './components/counter/Counter';


function App() {
  const title = 'Aula 02 Descomplica'
  return (
    <div className="App">

        <Header title={title}/>
        <div className='container-fluid'>
            <div className='row'>
              <BrowserRouter>
                <div className='col-md-3'>
                  <Sidebar></Sidebar>
                </div>
                <div className='col-md-9'>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/count' element={<Counter />} />
                    <Route path='/listUsers' element={<ListUsers />} />
                    <Route path='/modal' element={<ModalComponent />} />
                  </Routes>
                  
                </div>
              </BrowserRouter>
            </div>
          <Footer />

        </div>
        
    </div>
  );
}

export default App;
