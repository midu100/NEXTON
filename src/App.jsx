
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import AllReco from './components/AllReco'
import ProductDetails from './components/ProductDetails'
import CheckOut from './components/CheckOut'
import Registration from './pages/Registration'


function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/allreco' element={<AllReco />} />
        <Route path='/productdetails/:alu' element={<ProductDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/registration' element={<Registration />} />
      
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute} />
      
    </>
  )
}

export default App
