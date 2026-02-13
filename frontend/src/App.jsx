import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from  './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile';
import Config from './pages/Config';
import Main from './components/Main';
import Chat from './pages/Chat'
import Topico from './pages/Topico'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Dashboard/>}>
            <Route index element={<Main/>}/>
            <Route path='perfil' element={<Profile/>}/>
            <Route path='chat' element={<Chat/>}/>
            <Route path='topico' element={<Topico/>}/>
            <Route path='config' element={<Config/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
