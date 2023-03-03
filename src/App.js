import './App.css';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import HomePage from './pages/Home/HomePage';
import PageNotFound from './pages/404'
import Customer from './pages/customer/CustomerPage';

function App() {
  return (
    <Routes path='/'>
      <Route path='/' element={<HomePage/>} />
      <Route path='/customer' element={<Customer/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<PageNotFound/> } />
    </Routes>
  );
}

export default App;
