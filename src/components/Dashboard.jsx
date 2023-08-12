import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Dashboard = () => {
    const { dataState: { appData } } = useContext(DataContext)
    const dashboardStats = appData.reduce((acc, ele) => ({ totalStock: Number(ele.stock) + acc.totalStock, totalDelivered: Number(ele.delivered) + acc.totalDelivered, lowStockItems: ele.stock <= 10 ? Number(acc.lowStockItems + 1) : Number(acc.lowStockItems) }), {
        totalStock: 0,
        totalDelivered: 0,
        lowStockItems: 0
    })
    return (
        <div className="w-auto">
            <div className="flex flex-row justify-center gap-8 my-8">
                <div className="flex flex-col items-center px-10 py-8 bg-gray-100 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-green-600">{dashboardStats.totalStock}</p>
                    <p className="text-sm font-bold text-gray-950 lg:text-lg ">Total Stocks</p>
                </div>
                <div className="flex flex-col items-center px-10 py-8 bg-gray-100 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-yellow-500">{dashboardStats.totalDelivered}</p>
                    <p className="text-sm font-bold text-gray-950 lg:text-lg ">Total Delivered</p>
                </div>
                <div className="flex flex-col items-center px-10 py-8 bg-gray-100 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-red-600">{dashboardStats.lowStockItems}</p>
                    <p className="text-sm font-bold text-gray-950 lg:text-lg ">Low Stock Items</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;