import {Routes, Route} from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from 'src/pages/Auth/Login';
import Signup from 'src/pages/Auth/Signup';
import Dashboard from 'src/pages/Dashboard/Dashboard';
import Create from './pages/Dashboard/Create';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/dashboard/create"} element={<Create />} />
    </Routes>
  );
}

export default App;
