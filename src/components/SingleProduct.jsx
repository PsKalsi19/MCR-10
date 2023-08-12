import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const SingleProduct = () => {
    const { id } = useParams()
    const [selectedItem, setSelectedItem] = useState()
    const { dataState: { appData } } = useContext(DataContext)
    useEffect(() => {
        if (id) {
            setSelectedItem(appData.find(ele => Number(ele.id) === Number(id)))
        }
    }, [appData, id])
    return (
        <div className="flex flex-col m-8 space-y-4">
        
            <h3 className="text-3xl font-extrabold ">{selectedItem?.name}</h3>
            <img className="h-60 w-60" src={selectedItem?.imageUrl} alt={selectedItem?.name} />
            <p className="font-bold">Price:<span className="px-1 font-normal">${selectedItem?.price}</span></p>
            <p className="font-bold">Stock:<span className="px-1 font-normal">{selectedItem?.stock}</span></p>
            <p className="font-bold">Supplier:<span className="px-1 font-normal">{selectedItem?.supplier}</span></p>
            <p className="font-bold">Department:<span className="px-1 font-normal">{selectedItem?.department}</span></p>
            <p className="font-bold">SKU:<span className="px-1 font-normal">{selectedItem?.sku}</span></p>
            <p className="font-bold">Delivered:<span className="px-1 font-normal">{selectedItem?.delivered}</span></p>
            <p className="font-bold">Description:<span className="px-1 font-normal">{selectedItem?.description}</span></p>
        </div>
    );
};

export default SingleProduct;