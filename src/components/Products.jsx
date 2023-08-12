import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import Actions from "../utilities/actions";
import categories from "../db/categories";

const Products = () => {
    const { category } = useParams()
    const { dataState: { appData, selectedCategory, sortby, lowStock }, dataDispatch } = useContext(DataContext)
    useEffect(() => {
        if (category) {
            dataDispatch({ type: Actions.UPDATE_CATEGORY, payload: category })
        }
    }, [category, dataDispatch])

    const handleFilters = () => {
        let data = appData
        if (selectedCategory !== 'all') {
            data = data.filter(ele => ele.department === selectedCategory)
        }
        if (lowStock) {
            data = data.filter(ele => ele.stock <= 10)
        }

        switch (sortby) {
            case "name":
                return data.sort((a, b) => a.name.localeCompare(b.name))

            case "price":
                return data.sort((a, b) => a.price - b.price)

            case "stock":
                return data.sort((a, b) => a.stock - b.stock)
            default:
                break;
        }
    }
    return (
        <div className="m-8">
            <div className="flex flex-row items-center justify-between my-4">
                <h3 className="text-2xl font-bold">Products</h3>
                <select onChange={(e) => dataDispatch({ type: Actions.UPDATE_CATEGORY, payload: e.target.value })} value={selectedCategory} className="p-2 border rounded bg-gray-50" name="categories">
                    <option value="all">All Departments</option>
                    {
                        categories.map((ele, index) => <option key={index} value={ele}>{ele}</option>)
                    }
                </select>
                <div>
                    <input className="w-4 h-4 cursor-pointer" onChange={(e) => dataDispatch({ type: Actions.UPDATE_LOW_STOCK, payload: e.target.checked })} checked={lowStock} type="checkbox" id="lowStock" name="lowStock" />
                    <label className="mx-1 cursor-pointer" htmlFor="lowStock">
                        Low Stock Items
                    </label>
                </div>

                <select onChange={(e) => dataDispatch({ type: Actions.UPDATE_SORT_BY, payload: e.target.value })} value={sortby} className="p-2 border rounded bg-gray-50" name="sortBy">
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>

                </select>

                <Link to="/new-product" className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">New</Link>

            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 border dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-200 text-gray-950">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {handleFilters().map(ele => <tr key={ele.id} className="text-base font-semibold text-gray-900 bg-white border-b hover:bg-gray-100 ">
                            <th scope="row" className="px-6 py-4 ">
                                <img className="w-40 h-40" src={ele.imageUrl} alt={ele.name} />
                            </th>
                            <th className="px-6 py-4">
                                <Link to={`/product-highlight/${ele.id}`} className="underline underline-offset-1">{ele.name}</Link>
                            </th>
                            <td className="px-6 py-4">
                                {ele.description}
                            </td>
                            <td className="px-6 py-4">
                                ${ele.price}
                            </td>
                            <td className="px-6 py-4">
                                {ele.stock}
                            </td>
                            <td className="px-6 py-4">
                                {ele.supplier}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Products;