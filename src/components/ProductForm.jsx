import { useContext, useState } from "react";
import categories from "../db/categories";
import { DataContext } from "../context/DataProvider";
import Actions from "../utilities/actions";
import { useNavigate } from "react-router-dom";

const productsInitialState={
    department: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    sku: '',
    supplier: '',
    delivered: 0,
    imageUrl: ''
}
const ProductForm = () => {
    const { dataState: { appData }, dataDispatch } = useContext(DataContext)
    const navigate=useNavigate()
    const [product, setProduct] = useState(productsInitialState)



    const addNewProduct = (e) => {
        const defaultImgUrl = "https://source.unsplash.com/random/900x700/?products"
        e.preventDefault()

        const finalData = [...appData, {
            ...product,
            id: appData.length + 1,
            price:Number(product.price),
            stock:Number(product.stock),
            delivered:Number(product.delivered),
            imageUrl: product.imageUrl === '' ? defaultImgUrl : product.imageUrl
        }]
        dataDispatch({ type: Actions.UPDATE_DATA, payload: finalData })
        navigate(-1)
        setProduct(productsInitialState)
    }

    const handleChange = (e) => {
        setProduct(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
    }
    return (
        <div className="mx-12 my-8">
            <form onSubmit={addNewProduct} className="flex flex-col justify-between my-4 sm:w-full md:w-1/2">
                <h3 className="text-2xl font-bold">Products</h3>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Department">Department:</label>
                    <select onChange={handleChange} value={product.department} className="p-2 border rounded bg-gray-50" name="department">
                        <option selected hidden disabled value="">Select Department</option>
                        {
                            categories.map((ele, index) => <option key={index} value={ele}>{ele}</option>)
                        }
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Name">Name:</label>
                    <input onChange={handleChange} value={product.name} className="p-2 border rounded bg-gray-50" name="name" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Description">Description:</label>
                    <textarea onChange={handleChange} value={product.description} className="p-2 border rounded bg-gray-50" name="description"></textarea>

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Price">Price:</label>
                    <input step="0.5" type="number" min={0} onChange={handleChange} value={product.price} className="p-2 border rounded bg-gray-50" name="price" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Stock">Stock:</label>
                    <input type="number" min={0} onChange={handleChange} value={product.stock} className="p-2 border rounded bg-gray-50" name="stock" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="SKU">SKU:</label>
                    <input onChange={handleChange} value={product.sku} className="p-2 border rounded bg-gray-50" name="sku" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Supplier">Supplier:</label>
                    <input onChange={handleChange} value={product.supplier} className="p-2 border rounded bg-gray-50" name="supplier" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Delivered">Delivered:</label>
                    <input type="number" min={0} disabled onChange={handleChange} value={product.delivered} className="p-2 border rounded disabled:cursor-not-allowed disabled:opacity-60 bg-gray-50" name="delivered" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Image URL">Image URL:</label>
                    <input onChange={handleChange} value={product.imageUrl} className="p-2 border rounded bg-gray-50" name="imageUrl" />

                </div>


                <button type="submit" className="px-4 py-2 my-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">Add Product</button>

            </form>

        </div>
    );
};

export default ProductForm;