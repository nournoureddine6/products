
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Products } from './modules/products/pages/products'

function App() {

  return (
   <BrowserRouter>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <Link to="/" className="text-blue-600 font-semibold">Home</Link>
    </nav>
      
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
   </BrowserRouter>

  )
}

export default App
