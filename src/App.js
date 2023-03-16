import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
//import Pricing from './components/pricing';
function App() {
  return (
    <div className="App">
     <Routes> 
      <Route index element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
     </Routes>
     {/* <Pricing/> */}
    </div>
  );
}

export default App;
