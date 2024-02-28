// ! External
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// ! Internal
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'
import Start from './Components/Start'

import Login from './Components/login/Login'
import EmployeeLogin from './Components/login/EmployeeLogin'

import Employee from './Components/employee/Employee'
import AddEmployee from './Components/employee/AddEmployee'
import EditEmployee from './Components/employee/EditEmployee'
import EmployeeDetail from './Components/employee/EmployeeDetail'

import Category from './Components/category/Category'
import AddCategory from './Components/category/AddCategory'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
