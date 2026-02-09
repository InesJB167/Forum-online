import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from  './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Home' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
