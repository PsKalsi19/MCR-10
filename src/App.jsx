
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Departments from './components/Departments'
import Products from './components/Products'
import AppLayout from './layout/AppLayout'
import SingleProduct from './components/SingleProduct'
import ProductForm from './components/ProductForm'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/departments' element={<Departments />} />
                    <Route path='/products/:category' element={<Products />} />
                    <Route path='/product-highlight/:id' element={<SingleProduct />} />
                    <Route path='/new-product' element={<ProductForm />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
