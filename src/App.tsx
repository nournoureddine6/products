
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Products } from './modules/users/pages/products'
import { EditUser } from './modules/users/pages/edit-user'
import { UserForm } from './modules/users/components/user-form/user-form'
import { PopOver } from './modules/users/components/popover'

function App() {

  return (
   <BrowserRouter>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <Link to="/" className="text-blue-600 font-semibold">Home</Link>
      <Link to="/create" className="text-blue-600 font-semibold p-4">Create User</Link>
      <PopOver/>
    </nav>
      
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<EditUser />} />
        <Route path="/create" element={<UserForm />} />
      </Routes>
   </BrowserRouter>

  )
}

export default App
