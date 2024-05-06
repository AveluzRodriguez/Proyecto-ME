import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/*importo los tres componentes*/
import Nosotros from './components/nosotros';
import Contactanos from './components/contactanos';
import Inicio from './components/inicio';
import ListarClientes from './components/listarClientes';
import NavBarExample from './layouts/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample />}>
            <Route index element={<Inicio />}/>
              <Route path='nosotros' element={<Nosotros />}/>
                <Route path='contactanos' element={<Contactanos />}/> 
                <Route path='listarClientes' element={<ListarClientes />}/>              
                 <Route path='' element={<Navigate replace to="/"/>}/>            
          </Route>          
        </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
