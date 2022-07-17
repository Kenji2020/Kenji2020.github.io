import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import {Inicio} from './Screens/Inicio';
import {Proyectos} from './Screens/Proyectos.jsx';
import {Conocimientos} from './Screens/Conocimientos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <NavBar/>
      
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/Inicio" element={<Inicio/>}/>
            <Route path="/Proyectos" element={<Proyectos/>}/>
            <Route path="/Conocimiento" element={<Conocimientos/>}/>

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
