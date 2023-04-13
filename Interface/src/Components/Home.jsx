import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard.jsx'
import Search from '../pages/Search.jsx'
import AddCustomer from '../pages/AddCustomer.jsx'
import Docs from '../pages/Docs.jsx'
import Login from './Login'
import Signup from './Signup'

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<Search />} />
        <Route path='/addCustomer' element={<AddCustomer />} />
        <Route path='/docs' element={<Docs />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Home
